import styled from "styled-components"
import imdb from "../../../assets/logo-imdb.svg"
import rotten from "../../../assets/logo-rotten-tomatoes.svg"

const Label = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.grey.grey};
  border-radius: 4px;
  display: relative;
  letter-spacing: 0.17;
  margin-right: 16px;
  outline: none;
`

const IMDB = styled.div`
  border-radius: 4px 0px 0px 4px;
  background-color: ${({ theme: { color } }) => color.main.yellow};
  background-image: url(${imdb});
  background-repeat: no-repeat;
  background-position: center;
  width: 53px;
  height: 50px;
`

const Rotten = styled.div`
  border-radius: 4px 0px 0px 4px;
  background-color: ${({ theme: { color } }) => color.main.red};
  background-image: url(${rotten});
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 50px;
`

export { Label, IMDB, Rotten }
