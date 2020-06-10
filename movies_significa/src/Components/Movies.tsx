import React, { useEffect, useState } from "react";

type MoviesProps = {
  moviesList: Array<object>;
};

//Initial page, image and random
const Movies: React.FunctionComponent<MoviesProps> = (props: MoviesProps) => {
  const [movie, setMovie] = useState<object[]>();
  /**
   *
   */
  /**
   *
   */
  console.log("FROM MOVIES", props);
  return (
    <div>
      <h1>Movies</h1>
      <div>
        {props.moviesList.map((mov: any, index: number) => {
          return <div key={index}>{mov.Title}</div>;
        })}
      </div>
    </div>
  );
};

export default Movies;
