
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const correctPassword = 'password123'; // Replace with your actual password logic

    if (password === correctPassword) {
        if (rememberMe) {
            alert('We always remember you');
        }
        alert('Login successfully');
        window.location.href = 'index.html'; // Replace with your actual next page URL
    } else {
        alert('Unauthorized user access');
    }
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('loginForm').reset();
});
