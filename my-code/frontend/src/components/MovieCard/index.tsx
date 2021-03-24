import React from "react";
import { Container, Overlay } from "./styles";

interface IProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieCard: React.FC<IProps> = ({ Poster, Title, Year }) => {
  return (
    <Container background={Poster}>
      <Overlay>
        <div className="movie-info">
          <span className="title">{Title}</span>
          <span>{Year}</span>
        </div>
      </Overlay>
    </Container>
  );
};

export default MovieCard;
