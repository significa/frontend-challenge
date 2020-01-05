import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div`
  line-height: 38px;

  .logo-imdb {
    display: inline-block;
    background-color: ${variables.COLOR_YELLOW};
    border-top-left-radius: ${variables.BORDER_RADIUS};
    border-bottom-left-radius: ${variables.BORDER_RADIUS};
    padding: 0 8px;
    text-align: center;
    width: 51px;
  }

  .logo-rotten {
    display: inline-block;
    background-color: ${variables.COLOR_RED};
    border-top-left-radius: ${variables.BORDER_RADIUS};
    border-bottom-left-radius: ${variables.BORDER_RADIUS};
    padding: 0 8px;
    text-align: center;
    width: 51px;
  }

  .value {
    display: inline-block;
    border-top-right-radius: ${variables.BORDER_RADIUS};
    border-bottom-right-radius: ${variables.BORDER_RADIUS};
    border-style: solid;
    border-width: 1px;
    border-left-width: 0;
    border-color: ${variables.COLOR_MIDGREY};
    padding: 0 8px;
    text-align: center;
    width: 100px;
  }
`;
