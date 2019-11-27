import styled, { css } from 'styled-components';
import variables from '../../styles/variables';
import magnifierGrey from '../../assets/icon-magnifier-grey.svg';
import magnifierDisabled from '../../assets/icon-magnifier-disabled.svg';

export const Input = styled.input`
  background-image: url(${magnifierGrey});
  background-color: ${variables.COLOR_DEFAULT};
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 12px 20px;
  border-radius: ${variables.BORDER_RADIUS};
  border: 0;
  color: ${variables.COLOR_DARK};
  margin-bottom: 20px;
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
