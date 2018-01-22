let playlist = {
  artist: 'norma',
  song: 'she sings',
}

function updatePlaylist(playlist, artistName, songTitle)
{
  // the key-value is assigned destructively
  playlist[artistName] = songTitle;
}
