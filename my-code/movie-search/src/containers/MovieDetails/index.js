import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMovie } from "../../actions";

import { Container, ImageHolder } from "../../components/UI/Layout";
import { Text, Headline, Heading } from "../../components/UI/Typography";
import {
  Label,
  LabelRating,
  Rating,
  RatingIcon
} from "../../components/UI/Labels";
import Template from "../../components/UI/Layout/template";
import { Button, Icon } from "../../components/UI/Buttons";
import { camelCase } from "../../components/UI/Provider/utils";
import IMDB from "../../components/UI/Logos/IMDB";
import RottenTomatoes from "../../components/UI/Logos/RottenTomatoes";

class MovieDetails extends Component {
  componentDidMount() {
    const { imdbID } = this.props.match.params;

    this.props.fetchMovie(imdbID);
  }

  convertToList(list, title) {
    if (list) {
      const listArray = list.split(",");

      return (
        <Container justifyLeft width="33%">
          <Headline color="light-grey">{title}</Headline>
          <ul>
            {listArray.map(listItem => (
              <li key={listItem}>
                <Text>{listItem}</Text>
              </li>
            ))}
          </ul>
        </Container>
      );
    }
  }

  applyIcon(src) {
    switch (src) {
      case "internetMovieDatabase":
        return <IMDB />;

      case "rottenTomatoes":
        return <RottenTomatoes />;

      default:
        return <Text bold>{src}</Text>;
    }
  }

  render() {
    const { chosenMovie: movie } = this.props;
    const getValues =
      movie.Ratings &&
      movie.Ratings.map(review => (
        <LabelRating key={camelCase(review.Source)}>
          <RatingIcon src={camelCase(review.Source)}>
            {this.applyIcon(camelCase(review.Source))}
          </RatingIcon>
          <Rating>
            <Text>{review.Value}</Text>
          </Rating>
        </LabelRating>
      ));

    return (
      <Template>
        <Container>
          <Container justifyLeft width="60%">
            <Link to="/">Back</Link>
            <Headline color="white">
              {movie.Runtime} · {movie.Year} · <Label>{movie.Rated}</Label>
            </Headline>
            <Heading color="white">{movie.Title}</Heading>
            <Container justifyLeft>
              {getValues}
              <Button>
                <Icon />
                <Text color="light-grey">Add to Favorites</Text>
              </Button>
            </Container>
            <Headline color="light-grey">Plot</Headline>
            <Text>{movie.Plot}</Text>
            {this.convertToList(movie.Actors, "Cast")}
            {this.convertToList(movie.Genre, "Genre")}
            {this.convertToList(movie.Director, "Director/s")}
          </Container>
          <Container justifyRight width="40%">
            <ImageHolder height="530px" width="350px" bg={movie.Poster} />
          </Container>
        </Container>
      </Template>
    );
  }
}

function mapStateToProps(state) {
  return { chosenMovie: state.chosenMovie };
}

export default connect(
  mapStateToProps,
  { fetchMovie }
)(MovieDetails);
