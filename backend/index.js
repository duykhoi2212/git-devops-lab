require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'DevOps App';

let items = [{ id: 1, name: 'Item mẫu' }];

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/about', (req, res) => {
  res.json({
    name: 'Phung Van Duy Khoi',
    studentId: '2251220132',
    class: '22CT3',
    project: 'git-devops-lab',
    app: APP_NAME
  });
});

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: Date.now(), name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on port ${PORT}`);
});
