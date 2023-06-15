const express = require('express');
const multer = require('multer');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const app = express();
const upload = multer({ dest: 'uploads/' });

// app.use(express.static('public')); // Serve static files from the "public" directory
app.use(express.static('InkedInsights', { index: 'create.html' }));
app.post('/process-post', upload.single('image'), (req, res) => {
  // Process the form data here
  const { title, category, author, bio, content } = req.body;
  const image = req.file;

  // Perform further processing (e.g., save to database, etc.)

  // Redirect or send response
  res.send('Post created successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
