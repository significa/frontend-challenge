import React from "react";
import { Container, Overlay } from "./styles";

interface IProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieCard: React.FC<IProps> = ({ Poster, Title, Year, imdbID }) => {
  // Query localstorage before defining `liked` initial state
  const [liked, setLiked] = React.useState<boolean>(() => {
    const likedMovies = localStorage.getItem("@App/likedMovies");
    let parsed;
    try {
      parsed = JSON.parse(likedMovies);
    } catch {
      parsed = {};
    }
    // Set liked initial state
    if (parsed[imdbID]) {
      return true;
    }
    return false;
  });

  React.useEffect(() => {
    const likedMovies = localStorage.getItem("@App/likedMovies");
    let parsed;

    // Avoid JSON.Parse error if the stringified object is malformed for some reason
    try {
      parsed = JSON.parse(likedMovies);
    } catch {
      console.log("Failed to parse JSON...");
      parsed = {};
    }

    const newLikedMovies = {
      ...parsed,
      [imdbID]: liked,
    };

    // Save likes to local storage
    localStorage.setItem("@App/likedMovies", JSON.stringify(newLikedMovies));
  }, [liked]);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container background={Poster}>
      <Overlay>
        <button className="like-button" onClick={handleLike}>
          <img
            src={
              liked
                ? "/assets/icons/icon-heart-full.svg"
                : "/assets/icons/icon-heart-white.svg"
            }
            alt="Heart"
          />
        </button>

        <div className="movie-info">
          <span className="title">{Title}</span>
          <span>{Year}</span>
        </div>
      </Overlay>
    </Container>
  );
};

export default MovieCard;
