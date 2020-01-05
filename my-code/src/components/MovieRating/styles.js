import styled from 'styled-components';
import variables from '../../styles/variables';

export const Container = styled.div`
  line-height: 38px;
  margin-right: 15px;

  .logo-imdb {
    background-color: ${variables.COLOR_YELLOW};
    border-top-left-radius: ${variables.BORDER_RADIUS};
    border-bottom-left-radius: ${variables.BORDER_RADIUS};
    padding: 6px 8px;
  }

  .logo-rotten {
    background-color: ${variables.COLOR_RED};
    border-top-left-radius: ${variables.BORDER_RADIUS};
    border-bottom-left-radius: ${variables.BORDER_RADIUS};
    padding: 6px 8px;
  }

  .value {
    border-top-right-radius: ${variables.BORDER_RADIUS};
    border-bottom-right-radius: ${variables.BORDER_RADIUS};
    border-style: solid;
    border-width: 1px;
    border-left-width: 0;
    border-color: ${variables.COLOR_MIDGREY};
    padding: 5px 8px;
  }
`;
