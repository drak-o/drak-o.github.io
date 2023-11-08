window.onload = function() {
    var video = document.getElementById('myVideo');
    var buttons = document.querySelectorAll('button');

    video.addEventListener('loadeddata', function() {
        // Hide the buttons when the video's metadata is loaded
        buttons.forEach(function(button) {
            button.style.display = 'none';
        });
    });

    video.addEventListener('canplaythrough', function() {
        // Show the buttons when the video can play through
        buttons.forEach(function(button) {
            button.style.display = 'inline';
        });
    });
}
