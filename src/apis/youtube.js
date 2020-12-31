import axios from 'axios';

const Youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_KEY,
        type: 'video'
    }
});

export default Youtube;