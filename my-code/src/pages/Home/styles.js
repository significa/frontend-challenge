import styled from 'styled-components';
import variables from '../../styles/variables';

export const MoviesGrid = styled.div`
  .movie-wrapper {
    cursor: pointer;
    position: relative;
    text-align: center;
    grid-area: photo;
    /* max-width: 100%; */
    /* max-height: 100%; */

    > .movie-poster {
      background-size: cover;
      background-position: top center;
      border-radius: ${variables.BORDER_RADIUS};
      width: 100%;
      height: 400px;

      > img {
        max-width: 100%;
      }
    }

    > .movie-info {
      background: ${variables.COLOR_DARK};
      color: ${variables.COLOR_DEFAULT};
      text-align: left;

      display: none;
      flex-direction: column;
      justify-content: space-between;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }

    &:hover {
      > .movie-info {
        display: flex;
      }
    }
  }
`;