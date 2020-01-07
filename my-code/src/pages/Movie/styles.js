import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div`
  .btn-back {
    border: 0;
    padding-left: 0;
  }

  .movie-poster {
    text-align: center;

    img {
      border-radius: ${variables.BORDER_RADIUS};
      max-width: 100%;
    }
  }

  .movie-no-poster {
    border: 1px dotted ${variables.COLOR_MIDGREY};
    border-radius: ${variables.BORDER_RADIUS};
    color: ${variables.COLOR_MIDGREY};
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    width: 100%;
    height: 400px;
  }

  .movie-attributes {
    color: ${variables.COLOR_LIGHTGREY};

    .movie-attributes-separator {
      padding: 0 6px;
    }

    .movie-rated {
      background-color: ${variables.COLOR_LIGHTGREY};
      border-radius: ${variables.BORDER_RADIUS};
      color: ${variables.COLOR_DARK};
      padding: 4px 8px;
    }
  }

  .movie-title {
    font-size: ${variables.FONT_SIZE_GIANT};
    line-height: ${variables.FONT_SIZE_GIANT};
  }

  .movie-ratings {
    /* display: flex; */
    margin-top: 30px;

    .heart-button {
      border-style: solid;
      border-width: 1px;
      border-color: ${variables.COLOR_MIDGREY};
      padding: 7px 8px;
    }
  }

  .movie-plot {
    margin-top: 30px;
  }

  .movie-people {
    margin-top: 30px;
  }

  span.label {
    color: ${variables.COLOR_LIGHTGREY};
    display: block;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 991px) {
    .heart-button {
      margin-top: 15px;
    }
  }
`;

export const Loading = styled.div`
  text-align: center;
`;
