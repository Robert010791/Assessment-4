const PORT = 4000;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.]

const {
  getFortune,
  getCompliment,
  getVideo,
  getResource,
  addResource,
} = require('./controller/fortune.controller');

app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);
app.get('/api/video', getVideo);
app.get('/api/resource', getResource);
app.post('/api/resource', addResource);

app.listen(4000, () => console.log('Server running on 4000'));
