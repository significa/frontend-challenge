import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div``;

export const Button = styled.button`
  /**
   * The heart button is only visible if the movie is liked
   * or if the alwaysVisible prop is true.
   */
  display: ${props => (props.liked || props.alwaysVisible ? 'flex' : 'none')};
  align-items: center;
  background: transparent;
  border: 0;
  line-height: 18px;
  padding: 10px;

  /**
   * A red backgounr is added when the text is being shown
   * and the movie is liked.
   */
  background-color: ${props =>
    props.liked && props.showText ? `${variables.COLOR_RED}` : 'transparent'};
  color: ${props =>
    props.liked && props.showText
      ? `${variables.COLOR_WHITE}`
      : `${variables.COLOR_LIGHTGREY}`};

  img {
    margin: 0 8px;

    /**
     * The heart icon got a small drop shadow
     * to be more visible in bright backgrounds.
     */
    filter: ${props =>
      props.liked ? 'drop-shadow(0px 0px 3px #666)' : 'none'};
  }

  /**
   * The heart button becomes visible when the mouse
   * hovers a .movie-wrapper div.
   */
  .movie-wrapper:hover & {
    display: flex;
  }
`;
