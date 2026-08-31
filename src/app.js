const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let grades = [];

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.get('/grades', (req, res) => {
  res.json(grades);
});

app.post('/grades', (req, res) => {
  const { name, subject, score } = req.body;
  const id = Date.now().toString();
  const newGrade = { id, name, subject, score };
  grades.push(newGrade);
  res.status(201).json(newGrade);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Grade service is running on port ${port}`);
});
