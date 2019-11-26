import styled from 'styled-components';
import variables from '../../styles/variables';
import magnifierGrey from '../../assets/icon-magnifier-grey.svg';

export const Container = styled.div`
  input {
    background: url(${magnifierGrey}) ${variables.COLOR_DEFAULT} no-repeat
      scroll 12px 16px;
    border-radius: ${variables.BORDER_RADIUS};
    border: 0;
    padding: 12px 12px 12px 40px;
    width: 100%;

    ::placeholder {
      color: ${variables.COLOR_LIGHTGREY};
    }

    &:active {
      color: ${variables.COLOR_DARK};
    }

    &.disabled {
      background: ${variables.COLOR_GREY};
      color: ${variables.COLOR_MIDGREY};

      ::placeholder {
        color: ${variables.COLOR_MIDGREY};
      }
    }
  }
`;
