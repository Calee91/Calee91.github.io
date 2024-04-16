

function toggleSongs() {
    songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;