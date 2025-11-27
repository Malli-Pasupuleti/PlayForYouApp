import axios from 'axios';

const USER_URL = "http://localhost:8081/api";

const createUser = async (user) => {
    try {
        const response = await axios.post(USER_URL + '/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const loginUser = async (loginData) => {
    try {
        const response = await axios.post(USER_URL + '/login', loginData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

const logoutUser = async () => {
    try {
        const response = await axios.post(USER_URL + '/logout', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};


export const fetchSongsForCust = async () => {
    try {
        const response = await axios.get(USER_URL + '/exploreSongs');
        return response.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
};

export const fetchUserData = async () => {
    try {
        const response = await axios.get(USER_URL + '/customers');
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};


export const fetchUserByEmail = async (userEmail) => {
    try {
        const response = await axios.get(USER_URL + `/user?email=${userEmail}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export { createUser, loginUser, logoutUser };