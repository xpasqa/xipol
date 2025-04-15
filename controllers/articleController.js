const db = require('../db/connection');

exports.getAllArticles = (req, res) => {
  db.query('SELECT * FROM articles ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createArticle = (req, res) => {
  const { title, author, image, content, tags, status } = req.body;

  const query = `
    INSERT INTO articles (title, author, image, content, tags, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [title, author, image, content, tags, status], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Artikel ditambahkan', id: result.insertId });
  });
};
