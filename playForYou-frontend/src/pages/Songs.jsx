import React, { useState, useEffect, useRef } from 'react';
import { BiPlay, BiPause } from 'react-icons/bi';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { fetchSongs } from '../services/SongService';
import '../../src/App.css';

function Songs() {
    const [songs, setSongs] = useState([]);
    const [playingSongId, setPlayingSongId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchAllSongs = async () => {
            try {
                const songsData = await fetchSongs();
                setSongs(songsData);
            } catch (error) {
                console.error('Error fetching songs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllSongs();
    }, []);

    const togglePlay = (songId, songUrl, songName) => {
        const audio = audioRef.current;
        if (playingSongId === songId && !audio.paused) {
            audio.pause();
            setPlayingSongId(null);
        } else {
            if (!audio.paused) audio.pause();
            audio.src = songUrl;
            audio.play();
            setPlayingSongId(songId);
            setCurrentSong(songName);
        }
    };

    return (
        <div style={{
            background: 'url("https://th.bing.com/th/id/R.06267fc47d3d0f5e6182da405650563b?rik=2EVHxqp%2bh%2foZYA&riu=http%3a%2f%2fwww.karmanews.it%2fwp-content%2fuploads%2f2014%2f02%2fnotes-music.jpg&ehk=X1IaJ%2bEh7%2bOCfw93lEuOYnqQS%2bWYxlBsn0vvpnvfWb8%3d&risl=&pid=ImgRaw&r=0")',
            minHeight: '100vh',
            padding: '30px'
        }}>
            <h2 className="text-center fw-bold mb-4 text-white">🎧 Explore Songs</h2>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" />
                </div>
            ) : songs.length === 0 ? (
                <p className="text-center text-muted">No songs available.</p>
            ) : (
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {songs.map((song) => (
                        <Col key={song.id}>
                            <Card className="shadow h-100">
                                <Card.Img
                                    variant="top"
                                    src={song.thumbnail || 'https://via.placeholder.com/300x300?text=♪'}
                                    alt="Album Art"
                                    style={{ height: '230px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <div>
                                        <Card.Title className="text-truncate">{song.name}</Card.Title>
                                        <Card.Text className="mb-1"><strong>Artist:</strong> {song.artist}</Card.Text>
                                        <Card.Text className="mb-2"><strong>Genre:</strong> {song.genre}</Card.Text>
                                    </div>
                                    <Button
                                        variant="dark"
                                        className="rounded-circle mt-2"
                                        onClick={() => togglePlay(song.id, song.link, song.name)}
                                        style={{ width: 40, height: 40 }}
                                    >
                                        {playingSongId === song.id ? (
                                            <BiPause size={20} />
                                        ) : (
                                            <BiPlay size={20} />
                                        )}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

            {/* Global Audio Player at Bottom */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.85)',
                padding: '10px 20px',
                display: playingSongId ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white',
                zIndex: 1000
            }}>
                <div>
                    <strong>Now Playing:</strong> {currentSong}
                </div>
                <audio
                    ref={audioRef}
                    controls
                    style={{ width: '300px' }}
                    onEnded={() => {
                        setPlayingSongId(null);
                        setCurrentSong(null);
                    }}
                />
            </div>
        </div>
    );
}

export default Songs;
