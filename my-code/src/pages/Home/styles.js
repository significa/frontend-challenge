import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div`
  ul.pagination {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 15px 0;

    li {
      cursor: pointer;
      background-color: ${variables.COLOR_MIDGREY};
      border: 1px solid  ${variables.COLOR_GREY};
      border-radius: ${variables.BORDER_RADIUS};
      margin: 0 6px;
      padding: 5px 10px;

      &.active {
        background-color: ${variables.COLOR_YELLOW};
      }

      &.previous,
      &.next {
        display: none;
      }
    }
  }
`;

export const MoviesGrid = styled.div`
  .movie-wrapper {
    cursor: pointer;
    position: relative;
    text-align: center;
    grid-area: photo;

    .movie-poster {
      background-size: cover;
      background-position: top center;
      border-radius: ${variables.BORDER_RADIUS};
      width: 100%;
      height: 468px;

      > img {
        max-width: 100%;
      }
    }

    .movie-no-poster {
      border: 1px dotted ${variables.COLOR_MIDGREY};
      border-radius: ${variables.BORDER_RADIUS};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 468px;

      .poster-not-found {
        color: ${variables.COLOR_SECONDARY};
        font-size: 80%;
      }
    }

    .movie-btn-like {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
    }

    .movie-info {
      background: ${variables.COLOR_DARK};
      color: ${variables.COLOR_DEFAULT};
      text-align: left;

      display: none;
      flex-direction: row;
      align-items: flex-end;

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;

      span {
        padding: 0 10px;
      }
    }

    &:hover {
      > .movie-btn-like {
        display: block;
      }
      > .movie-info {
        display: flex;
      }
    }

    @media screen and (max-width: 767px) {
      .movie-poster {
        height: 560px;
      }
    }
  }
`;
