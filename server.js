const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send("Cloud proxy running");
});

app.get('/proxy', async (req, res) => {
  const url = req.query.url;

  if (!url) return res.status(400).send("Missing URL");

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Error fetching URL");
  }
});

app.listen(process.env.PORT || 3000);
