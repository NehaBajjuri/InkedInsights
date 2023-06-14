document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form field values
    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var author = document.getElementById('author').value;
    var bio = document.getElementById('bio').value;
    var image = document.getElementById('image').value; // You can handle image upload separately
    var content = document.getElementById('content').value;
  
    // Create a blog post object
    var blogPost = {
      title: title,
      category: category,
      author: author,
      bio: bio,
      image: image,
      content: content
    };
  
    // Perform further processing or submit the data to a server
    // For example, you can send the data using AJAX or save it to a database
    console.log(blogPost); // Replace with your desired processing or submission logic
  });
  