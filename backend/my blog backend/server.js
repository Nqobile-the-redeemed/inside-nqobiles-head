require('dotenv').config();

const express = require('express');
const postRoutes = require('./routes/postRoutes');
const fileUpload = require('express-fileupload');
const path = require('path');
const mongoose = require('mongoose');


// Create express instance
const app = express();



// middleware


app.use((req, res, next) => {
  console.log(req.path, req.method, req.query, req.body, req.params)
  next();
});

// Serve static files from the 'imageUploads' folder
app.use('/api/imageUploads', express.static(path.join(__dirname, 'imageUploads')));

//Enable file upload
app.use(fileUpload()); 

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// Use API Routes
app.use('/api/posts', postRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Server listening on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });
