// Get the buttons by their class names
const signupButton = document.querySelector('.signup-btn');
const signinButton = document.querySelector('.signin-btn');

// Add click event listener to the Sign Up button
signupButton.addEventListener('click', function() {
  window.open = 'demo.html';  // Replace with your desired URL for sign up
});

// Add click event listener to the Sign In button
signinButton.addEventListener('click', function() {
  window.location.href = 'signin.html';  // Replace with your desired URL for sign in
});
