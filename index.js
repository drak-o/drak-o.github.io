window.onload = function() {
    var video = document.getElementById('myVideo');

    video.addEventListener('loadeddata', function() {
        video.style.backgroundColor = 'transparent'; // If you want to remove the black background
    });
}
