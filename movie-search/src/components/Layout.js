import styled from "styled-components"
import { width, space } from "styled-system"

const Flex = styled.div`
  ${width};
  ${space};

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FlexLeft = styled.div`
  ${width};
  ${space};

  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const FlexRight = styled.div`
  ${width};
  ${space};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-content: flex-end;
`

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
`

const Wrapper = styled.div`
  ${width};
  ${space};

  align-items: flex-start;
  display: flex;
  flex-direction: row;
`

export { Flex, FlexLeft, FlexRight, Grid, Wrapper }
