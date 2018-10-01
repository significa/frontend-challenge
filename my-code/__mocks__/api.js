export const movieOK = {
  "Title": "The Movie Title",
  "Year": "2018",
  "Rated": "R",
  "Runtime": "101 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Successful Director",
  "Actors": "Famous Actor, Less Famous Actor",
  "Plot": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et",
  "Poster": "https://example.com/qwerty.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.7/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "83%"
    },
    {
      "Source": "Metacritic",
      "Value": "67/100"
    }
  ],
  "imdbRating": "7.7",
  "imdbID": "tt3987635",
  "Response": "True"
};

export const errorResponse = {
  "Response": "False",
  "Error": "Error getting data."
}

export const noMoviesFound = {
  "Response": "False",
  "Error": "Movie not found!"
}

export const searchOK = {
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://example.com/1796.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://example.com/16683.jpg"
    }
  ],
  "totalResults": "2376",
  "Response": "True"
}
