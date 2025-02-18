const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Missing error handling for missing or invalid data
  console.log(newUser);
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));