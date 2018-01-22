let playlist = {
}

function updatePlaylist(playlist, artistName, songTitle)
{
  // the key-value is assigned destructively
  playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName)
{
  // this procedure removes a key-value from an Object
  delete playlist.artistName;
  playlist;
}