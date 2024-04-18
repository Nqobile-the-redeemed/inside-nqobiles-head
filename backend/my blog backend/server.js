require('dotenv').config();

const express = require('express');
const postRoutes = require('./routes/postRoutes');


// Create express instance
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method, req.query, req.body, req.params)
  next();
});

// Require API routes
app.get('/', (req, res) => {
  res.json({mssg: 'let us conquer the world'});
});

// Use API Routes
app.use('/api/posts', postRoutes);

// Listen to port 4000
app.listen(process.env.PORT, () => {
  console.log('Server listening on port 4000');
});