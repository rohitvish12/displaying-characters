import axios from 'axios';

export const fetchData = async(text) => {
    return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
}