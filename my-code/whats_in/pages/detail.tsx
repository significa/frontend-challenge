import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  Grid,
  ButtonGroup,
  Divider,
  Stack,
  Button,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HubIcon from "@mui/icons-material/Hub";
import { Item, PageWrapper, Badge } from "../styles";
import TextLight from "../components/Text/Text";
import GoBackButton from "../components/Button/BackButton";
import Rating from "../components/Button/RateButton";
import Alert from "../components/Alert";
import Loader from "../components/Spinner";
import Image from "next/image";

interface movieType {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Director: string;
  Rated: string;
  Ratings: Array<{
    Value: string;
  }>;
}

const Detail = () => {
  const router = useRouter();
  const [errorAlert, setErrorAlert] = useState(false);
  const [loader, setLoader] = useState(true);
  const [movie, setMovie] = useState<movieType>({
    imdbID: "",
    Title: "",
    Poster: "",
    Year: "",
    Runtime: "",
    Genre: "",
    Actors: "",
    Plot: "",
    Director: "",
    Rated: "",
    Ratings: [{ Value: "" }],
  });
  const movieId: string | string[] | undefined = router.query.imdbID;
  const {
    Poster,
    Title,
    Runtime,
    Genre,
    Actors,
    Plot,
    Director,
    Rated,
    Year,
    Ratings,
  } = movie;
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const closeAlert = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const res = await fetch(`/api/getMoviesById?id=${movieId}`);
        const movieDetail = await res.json();
        setMovie(movieDetail);
        setLoader(!movieDetail.Response);
      } catch (error) {
        error && setErrorAlert(true);
      }
    };
    getMovieDetails();
  }, [movieId]);

  //set favorite movies
  const saveFavoriteMovie = (movieId: string) => {
    setSuccess(false);
    setLoading(true);
    let favoriteList: any = [];
    let favMovieId = movieId;
    favoriteList.push(favMovieId);
    if (typeof window !== "undefined") {
      localStorage.setItem("movieId", favoriteList);
    }
  };

  //get favorite movies
  let favoriteMovieId =
    typeof window !== "undefined" ? localStorage.getItem("movieId") : null;

  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      {errorAlert && <Alert open={open} closeAlert={closeAlert} />}
      {loader ? (
        <Loader />
      ) : (
        <PageWrapper>
          <Grid container spacing={3}>
            <Grid item xs={6} md={12}>
              <GoBackButton />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <Item>
                <Stack
                  direction="row"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ backgroundColor: "#808080" }}
                    />
                  }
                  spacing={2}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="primary.dark"
                  >
                    {Runtime}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="primary.dark"
                  >
                    {Year}
                  </Typography>
                  <Badge label={Rated} />
                </Stack>

                <Typography
                  variant="h2"
                  gutterBottom
                  color="primary.contrastText"
                  sx={{ fontWeight: 750, py: 2 }}
                >
                  {Title}
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <ButtonGroup disableElevation variant="contained">
                    <Image
                      src="/logo-imdb.png"
                      alt="imdb logo"
                      width={55}
                      height={20}
                    />
                    <Rating title={Ratings ? Ratings[0]?.Value : "N/A"} />
                  </ButtonGroup>
                  <ButtonGroup disableElevation variant="contained">
                    <Image
                      src="/logo-rotten-tomatoe.png"
                      alt="imdb logo"
                      width={45}
                      height={20}
                    />
                    <Rating title={Ratings ? Ratings[1]?.Value : "N/A"} />
                  </ButtonGroup>
                  {!success && movie?.imdbID === favoriteMovieId ? (
                    <Button
                      variant="contained"
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        textTransform: "capitalize",
                        color: "#fff",
                        backgroundColor: "#FF4040",
                      }}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      disabled={loading}
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        textTransform: "capitalize",
                        color: "#808080",
                        borderColor: "#1B2329",
                      }}
                      onClick={() => {
                        saveFavoriteMovie(movie?.imdbID);
                      }}
                    >
                      Add to favourite
                    </Button>
                  )}
                </Stack>

                <Stack direction="column" spacing={2} sx={{ py: 4 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="primary.dark"
                  >
                    Plot
                  </Typography>
                  <TextLight title={Plot} />
                </Stack>
                <Stack direction="row" spacing={4}>
                  <div>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      color="primary.dark"
                    >
                      Cast
                    </Typography>
                    <TextLight title={Actors} />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      color="primary.dark"
                    >
                      Genre
                    </Typography>
                    <TextLight title={Genre} />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      color="primary.dark"
                    >
                      Director
                    </Typography>
                    <TextLight title={Director} />
                  </div>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} md={5}>
              <CardMedia
                sx={{ borderRadius: "0.4rem", mb: 3 }}
                component="img"
                width="auto"
                height="auto"
                image={Poster !== "N/A" ? `${Poster}` : `no-movie.png`}
              />
            </Grid>
          </Grid>
        </PageWrapper>
      )}
    </>
  );
};

export default Detail;
