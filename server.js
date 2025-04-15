const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const articleRoutes = require('./routes/articleRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
