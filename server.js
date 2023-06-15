const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');

const app = express();
const upload = multer({ dest: 'uploads/' });

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: 'localhost', // replace with your database host
  user: 'root', // replace with your database username
  password: 'password', // replace with your database password
  database: 'project' // replace with your database name
});

// Establish MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'InkedInsights')));

app.post('/process-post', upload.single('image'), (req, res) => {
  // Process the form data here
  const { title, category, author, bio, content } = req.body;
  const image = req.file;

  // Save data to the database
  const postData = {
    title: title,
    category: category,
    author: author,
    bio: bio,
    content: content,
    image: image.filename // assuming you're storing the filename in the database
  };

  connection.query('INSERT INTO posts SET ?', postData, (err, results) => {
    if (err) {
      console.error('Error saving data to the database:', err);
      res.status(500).send('Error saving data');
      return;
    }

    // Redirect or send response
    res.send('Post created successfully');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
