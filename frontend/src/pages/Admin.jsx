import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Admin.css';

const STORAGE_KEY = 'oliver_admin_pw';

function toWhatsAppNumber(phone) {
  const digits = String(phone).replace(/\D/g, '');
  if (digits.startsWith('250')) return digits;
  if (digits.startsWith('0')) return '250' + digits.slice(1);
  return digits;
}

function formatDate(value) {
  return new Date(value).toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function Admin() {
  const [password, setPassword] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) || ''
  );
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Keep this page out of search engines
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setPassword('');
    setMessages([]);
  }, []);

  const api = useCallback(
    async (url, options = {}) => {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
      });
      if (res.status === 401) {
        logout();
        throw new Error('Wrong password. Please try again.');
      }
      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      return res.json();
    },
    [password, logout]
  );

  const load = useCallback(async () => {
    setStatus('loading');
    setError('');
    try {
      const data = await api('/api/messages');
      setMessages(data.messages);
    } catch (err) {
      setError(err.message);
    } finally {
      setStatus('idle');
    }
  }, [api]);

  useEffect(() => {
    if (password) load();
  }, [password, load]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    sessionStorage.setItem(STORAGE_KEY, input);
    setPassword(input);
    setInput('');
  };

  const toggleHandled = async (m) => {
    try {
      await api('/api/messages', {
        method: 'PATCH',
        body: JSON.stringify({ id: m.id, handled: !m.handled }),
      });
      setMessages((prev) =>
        prev.map((x) => (x.id === m.id ? { ...x, handled: !x.handled } : x))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const remove = async (m) => {
    if (!window.confirm(`Delete the message from ${m.name}? This cannot be undone.`)) {
      return;
    }
    try {
      await api(`/api/messages?id=${m.id}`, { method: 'DELETE' });
      setMessages((prev) => prev.filter((x) => x.id !== m.id));
    } catch (err) {
      setError(err.message);
    }
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return messages.filter((m) => {
      if (filter === 'new' && m.handled) return false;
      if (filter === 'done' && !m.handled) return false;
      if (!q) return true;
      return [m.name, m.phone, m.message].some((v) =>
        String(v).toLowerCase().includes(q)
      );
    });
  }, [messages, query, filter]);

  const newCount = messages.filter((m) => !m.handled).length;

  if (!password) {
    return (
      <section className="admin admin-login-wrap">
        <form className="admin-login" onSubmit={handleLogin}>
          <h1>Admin login</h1>
          <p>Enter the admin password to see customer messages.</p>
          <input
            type="password"
            placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            required
          />
          <button type="submit">Log in</button>
          {error && <p className="admin-error">{error}</p>}
        </form>
      </section>
    );
  }

  return (
    <section className="admin">
      <div className="admin-container">
        <div className="admin-top">
          <div>
            <h1>Customer messages</h1>
            <p>
              {messages.length} total · {newCount} new
            </p>
          </div>
          <div className="admin-actions">
            <button onClick={load} disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Refresh'}
            </button>
            <button className="admin-ghost" onClick={logout}>
              Log out
            </button>
          </div>
        </div>

        <div className="admin-tools">
          <input
            type="search"
            placeholder="Search by name, phone or message"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="admin-filters">
            {[
              ['all', 'All'],
              ['new', 'New'],
              ['done', 'Done'],
            ].map(([value, label]) => (
              <button
                key={value}
                className={filter === value ? 'active' : ''}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {error && <p className="admin-error">{error}</p>}

        {status === 'loading' && messages.length === 0 && (
          <p className="admin-empty">Loading messages...</p>
        )}
        {status !== 'loading' && visible.length === 0 && (
          <p className="admin-empty">No messages to show.</p>
        )}

        <div className="admin-list">
          {visible.map((m) => (
            <article
              className={`admin-card ${m.handled ? 'is-done' : ''}`}
              key={m.id}
            >
              <div className="admin-card-head">
                <div>
                  <h3>{m.name}</h3>
                  <span className="admin-date">{formatDate(m.created_at)}</span>
                </div>
                <span
                  className={`admin-badge ${m.handled ? 'admin-badge-done' : 'admin-badge-new'}`}
                >
                  {m.handled ? 'Done' : 'New'}
                </span>
              </div>

              <p className="admin-message">{m.message}</p>

              <div className="admin-card-foot">
                <a href={`tel:${m.phone}`}>📞 {m.phone}</a>
                <a
                  href={`https://wa.me/${toWhatsAppNumber(m.phone)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
                <button onClick={() => toggleHandled(m)}>
                  {m.handled ? 'Mark as new' : 'Mark as done'}
                </button>
                <button className="admin-danger" onClick={() => remove(m)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;


