// @flow
import styled from "styled-components"
import { width, space } from "styled-system"

const Flex = styled.div`
  ${width};
  ${space};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexLeft = styled.div`
  ${width};
  ${space};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const FlexRight = styled.div`
  ${width};
  ${space};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-content: flex-end;
`

export { Flex, FlexLeft, FlexRight }
