import styled, { css } from 'styled-components';
import variables from '../../styles/variables';
import magnifierGrey from '../../assets/icon-magnifier-grey.svg';
import magnifierDisabled from '../../assets/icon-magnifier-disabled.svg';

export const Container = styled.div`
  position: relative;

  button {
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 3px;
    right: 0;

    &:hover {
      color: ${variables.COLOR_MIDGREY};
    }
  }

  .hint {
    color: ${variables.COLOR_LIGHTGREY};
    font-size: 10pt;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  background-image: url(${magnifierGrey});
  background-color: ${variables.COLOR_DEFAULT};
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 12px 20px;
  border-radius: ${variables.BORDER_RADIUS};
  border: 0;
  color: ${variables.COLOR_DARK};
  padding: 12px 12px 12px 40px;
  width: 100%;

  ::placeholder {
    color: ${variables.COLOR_SECONDARY};
  }

  ${props =>
    props.isDisabled &&
    css`
      background-image: url(${magnifierDisabled});
      background-color: ${variables.COLOR_DISABLED};
      color: ${variables.COLOR_MIDGREY};

      ::placeholder {
        color: ${variables.COLOR_MIDGREY};
      }
    `}
`;
