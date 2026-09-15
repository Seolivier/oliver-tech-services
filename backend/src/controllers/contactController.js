const pool = require('../config/db');

const sendContactMessage = async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, phone, message) VALUES ($1, $2, $3) RETURNING *',
      [name, phone, message]
    );

    console.log('Saved contact:', result.rows[0]);
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error saving message' });
  }
};

module.exports = { sendContactMessage };

