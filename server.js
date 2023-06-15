const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'InkedInsights')));

app.post('/process-post', upload.single('image'), (req, res) => {
  // Process the form data here
  const { title, category, author, bio, content } = req.body;
  const image = req.file;

  // Perform further processing (e.g., save to database, etc.)

  // Redirect or send response
  res.send('Post created successfully');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
