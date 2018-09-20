import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCatalogue } from "../../actions";
import { Container } from "../../components/UI/Layout";
import { Card, CardOverlay, CardInfo } from "../../components/UI/Cards";
import { CardTitle, Text } from "../../components/UI/Typography";

const MovieCatalogue = ({ movieCatalogue }) => (
  <Container>
    {movieCatalogue.Search &&
      movieCatalogue.Search.map(movie => (
        <Card key={movie.imdbID} bg={movie.Poster}>
          <Link to={`/movies/${movie.imdbID}`}>
            <CardOverlay>
              <CardInfo>
                <CardTitle color="white">{movie.Title}</CardTitle>
                <Text>{movie.Year}</Text>
              </CardInfo>
            </CardOverlay>
          </Link>
        </Card>
      ))}
  </Container>
);

function mapStateToProps({ movieCatalogue }) {
  return { movieCatalogue };
}

export default connect(
  mapStateToProps,
  { fetchCatalogue }
)(MovieCatalogue);
