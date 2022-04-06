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
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HubIcon from "@mui/icons-material/Hub";
import { Item, PageWrapper, Badge } from "../styles";
import axios from "axios";
import TextBody from "../components/Text/textBody";
import TextLight from "../components/Text/textLight";
import TextMain from "../components/Text/textMain";
import TextDark from "../components/Text/textDark";
import GoBackButton from "../components/Button/backButton";
import Rating from "../components/Button/rateButton";
import Alert from "../components/alert";
import Loader from "../components/spinner";

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

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${movieId}&apikey=d3e8c483`
        );
        setMovie(response.data);
        setLoader(!response.data.Response);
      } catch (error) {
        error && setErrorAlert(true);
      }
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      {errorAlert && <Alert />}
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
                  <TextDark title={Runtime} />
                  <TextDark title={Year} />
                  <Badge label={Rated} />
                </Stack>

                <TextMain title={Title} />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <ButtonGroup disableElevation variant="contained">
                    <Button sx={{ backgroundColor: "#ffa500", color: "#000" }}>
                      IMDB
                    </Button>
                    <Rating title={Ratings ? Ratings[0]?.Value : "N/A"} />
                  </ButtonGroup>
                  <ButtonGroup disableElevation variant="contained">
                    <Button sx={{ backgroundColor: "red", color: "#fff" }}>
                      <HubIcon />
                    </Button>
                    <Rating title={Ratings ? Ratings[1]?.Value : "N/A"} />
                  </ButtonGroup>
                  <Button
                    variant="outlined"
                    startIcon={<FavoriteBorderIcon />}
                    sx={{
                      textTransform: "capitalize",
                      color: "#808080",
                      borderColor: "#808080",
                    }}
                  >
                    Add to favourites
                  </Button>
                </Stack>

                <Stack direction="column" spacing={2} sx={{ py: 4 }}>
                  <TextDark title="Plot" />
                  <TextBody title={Plot} />
                </Stack>
                <Stack direction="row" spacing={4}>
                  <div>
                    <TextDark title="Cast" />
                    <TextLight title={Actors} />
                  </div>
                  <div>
                    <TextDark title="Genre" />
                    <TextLight title={Genre} />
                  </div>
                  <div>
                    <TextDark title="Director" />
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
