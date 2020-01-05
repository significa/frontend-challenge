import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div``;

export const Button = styled.button`
  /**
   * Initialy the heart button is never visible.
   */
  display: none;
  align-items: center;
  background: transparent;
  border: 0;
  line-height: 18px;
  padding: 10px;

  img {
    margin: 0 8px;
  }

  &.visible {
    display: flex;
  }

  /**
   * When a movie is liked, the button receives this class
   * and becomes always visible.
   */
  &.liked {
    /**
     * The heart icon got a small drop shadow
     * to be more visible in bright backgrounds.
     */
    img {
      filter: drop-shadow(0px 0px 3px #666);
    }

    /**
     * .liked-red is added when the text is being shown
     * and the movie is liked.
     */
    &-red {
      background-color: ${variables.COLOR_RED};
      color: ${variables.COLOR_WHITE};
    }
  }

  /**
   * The heart button becomes visible when the mouse
   * hovers a .movie-wrapper div.
   */
  .movie-wrapper:hover & {
    display: flex;
  }
`;
