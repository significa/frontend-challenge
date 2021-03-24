import React from "react";
import { useParams } from "react-router";
import { IMovieDetails } from "./types";
import api from "../../services/api";
import BackButton from "../../components/BackButton";
import { Container, MovieInfoContainer, Poster } from "./styles";
import Rating from "../../components/Rating";
import FavouriteButton from "../../components/FavouriteButton";
interface IParams {
  id: string;
}

enum RequestStatus {
  Idle,
  Loading,
  Loaded,
  Error,
}

const Movie: React.FC = () => {
  const [status, setStatus] = React.useState(RequestStatus.Idle);
  const [details, setDetails] = React.useState<IMovieDetails | undefined>();
  const params: IParams = useParams();
  React.useEffect(() => {
    (async function () {
      try {
        setStatus(RequestStatus.Loading);
        const { data }: { data: IMovieDetails } = await api.get(
          `?apikey=4788f920&i=${params.id}`
        );
        setDetails(data);
        setStatus(RequestStatus.Loaded);
      } catch {
        setStatus(RequestStatus.Error);
      }
    })();
  }, []);

  if (status === RequestStatus.Loading) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <BackButton />
      <Container>
        <MovieInfoContainer>
          <ul>
            <li>{details?.Runtime}</li>
            <li>{details?.Year}</li>
            <li className="rated">
              <span>{details?.Rated}</span>
            </li>
          </ul>
          <h1>{details?.Title}</h1>
          <div className="ratings">
            {details?.Ratings.map((rating) => (
              <Rating {...rating} />
            ))}
            <FavouriteButton imdbID={details?.imdbID} />
          </div>
        </MovieInfoContainer>
        <Poster url={details?.Poster} />
      </Container>
    </React.Fragment>
  );
};

export default Movie;
