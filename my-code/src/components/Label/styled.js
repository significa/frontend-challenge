import styled from "styled-components"

const base = css`
  border: 1px solid ${p => p.theme.color.grey.lightgrey};
`

const IMDBLabel = styled.div`
  ${base};
`

const RottenLabel = styled.div`
  ${base};
`

export { IMDBLabel, RottenLabel }
