const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.send('Hello Zulqarnain! This is running on port 3200 🚀');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
