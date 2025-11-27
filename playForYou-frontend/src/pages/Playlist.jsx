import React, { useState, useEffect } from 'react';
import { createPlaylist, songsForPlaylist } from '../services/PlaylistService';

function Playlist() {
    const [playlistName, setPlaylistName] = useState('');
    const [songs, setSongs] = useState([]);
    const [playlistSongs, setPlaylistSongs] = useState([]);
    const [msg, setMsg] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getSongs = async () => {
            try {
                const songsData = await songsForPlaylist();
                setSongs(songsData);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        getSongs();
    }, []);

    const addPlaylist = async (e) => {
        e.preventDefault();
        const playlist = { playlistName, playlistSongs };

        try {
            const response = await createPlaylist(playlist);
            setMsg(response.data);
        } catch (error) {
            console.error(error);
            setMsg(error.response?.data || 'An error occurred.');
        }
    };

    const handleSongCheckboxChange = (e, songId) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            const selectedSong = songs.find(song => song.id === songId);
            setPlaylistSongs(prevSongs => [...prevSongs, selectedSong]);
        } else {
            setPlaylistSongs(prevSongs => prevSongs.filter(song => song.id !== songId));
        }
    };

    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-dark text-white text-center">
                            <h3>Create New Playlist</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={addPlaylist}>
                                <div className="mb-3">
                                    <label htmlFor="playlistName" className="form-label">Playlist Name</label>
                                    <input
                                        type="text"
                                        id="playlistName"
                                        className="form-control form-control-lg border border-dark"
                                        placeholder="Enter playlist name"
                                        value={playlistName}
                                        onChange={(e) => setPlaylistName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Search Songs</label>
                                    <input
                                        type="text"
                                        className="form-control border-dark"
                                        placeholder="Search by song name..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="table-responsive mb-4">
                                    <table className="table table-bordered text-center align-middle">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Select</th>
                                                <th>#</th>
                                                <th>Song Name</th>
                                                <th>Artist</th>
                                                <th>Genre</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredSongs.map((song, index) => (
                                                <tr key={song.id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input border-dark"
                                                            onChange={(e) => handleSongCheckboxChange(e, song.id)}
                                                        />
                                                    </td>
                                                    <td>{index + 1}</td>
                                                    <td>{song.name}</td>
                                                    <td>{song.artist}</td>
                                                    <td>{song.genre}</td>
                                                </tr>
                                            ))}
                                            {filteredSongs.length === 0 && (
                                                <tr>
                                                    <td colSpan="5" className="text-muted">No songs found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-success btn-lg">Create Playlist</button>
                                </div>
                            </form>

                            {msg && (
                                <div className="alert alert-info text-center mt-4" role="alert">
                                    {msg}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;
