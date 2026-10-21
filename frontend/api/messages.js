import pg from 'pg';
import crypto from 'crypto';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function isAuthorized(req) {
  const supplied = req.headers['x-admin-password'];
  const expected = process.env.ADMIN_PASSWORD;
  if (!supplied || !expected) return false;

  // Hash both values so the comparison is constant-time and the lengths match
  const a = crypto.createHash('sha256').update(String(supplied)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (!isAuthorized(req)) {
    // Small delay to slow down password guessing
    await new Promise((resolve) => setTimeout(resolve, 600));
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    if (req.method === 'GET') {
      const result = await pool.query(
        'SELECT id, name, phone, message, created_at, handled FROM contacts ORDER BY created_at DESC'
      );
      return res.status(200).json({ messages: result.rows });
    }

    if (req.method === 'PATCH') {
      const { id, handled } = req.body || {};
      if (!Number.isInteger(id) || typeof handled !== 'boolean') {
        return res.status(400).json({ error: 'Invalid request' });
      }
      await pool.query('UPDATE contacts SET handled = $1 WHERE id = $2', [handled, id]);
      return res.status(200).json({ success: true });
    }

    if (req.method === 'DELETE') {
      const id = Number(req.query.id);
      if (!Number.isInteger(id)) {
        return res.status(400).json({ error: 'Invalid id' });
      }
      await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Server error' });
  }
}



