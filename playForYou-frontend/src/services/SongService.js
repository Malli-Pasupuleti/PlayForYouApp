import axios from 'axios'

const SONG_URL = 'http://localhost:8081'

const addSong = async (song) => {
    try {
        const response = await axios.post(SONG_URL + '/addSong', song, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding song:', error);
        throw error;
    }
};

export default addSong;

export const fetchSongs = async () => {
    try {
        const response = await axios.get(SONG_URL + '/songs');
        return response.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
};

