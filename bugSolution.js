const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Validate request body
  if (!newUser || !newUser.name || !newUser.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    //Further processing of newUser
    console.log(newUser);
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));