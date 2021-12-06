import axios from "axios";




export const getMovies = async (searchValue = '2021') => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=d3e8c483`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const getMovie = async () => {
    return await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d3e8c483');
};

