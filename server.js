const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Firebase инициализация
const { initializeApp } = require('firebase/app');
const firebaseConfig = require('./firebase-config/firebase-config');
initializeApp(firebaseConfig);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
