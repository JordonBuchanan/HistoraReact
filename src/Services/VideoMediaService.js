import axios from 'axios';

const YoutubeKey = 'AIzaSyCYvrGY484jpbThgGGRzuV1shxYXEU4nqc';
const params = {
    maxResults: 5,
    key: YoutubeKey
}

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=historical&key=' + params.key
})