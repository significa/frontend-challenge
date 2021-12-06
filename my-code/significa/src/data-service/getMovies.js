import axios from "axios";




export const getMovies = async (searchValue = '2021') => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=d3e8c483`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const getMovie = async (movieID) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${movieID}&apikey=d3e8c483`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

};

