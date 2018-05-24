var playlist = {["Lil Boosie"]: "Wipe Me Down"};

function updatePlaylist(playlist,artistName,song){
	playlist[artist]=song
	return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist
  return playlist
}