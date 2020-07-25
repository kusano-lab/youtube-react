import axios from 'axios';

// YouTube Data API
// https://developers.google.com/youtube/v3/docs/search/list?hl=ja
// https://developers.google.com/youtube/v3/docs/videos/list?hl=ja

const KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
}

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            chart: 'mostPopular'
        }
    })
}

export const fetachSelectedData = async (id) => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            id
        }
    })
}