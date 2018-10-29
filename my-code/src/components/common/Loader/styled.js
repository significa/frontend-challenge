import styled from "styled-components"

const Loader = styled.div`
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border-top: 12px solid white;
    border-right: 12px solid white;
    border-bottom: 12px solid white;
    border-left: 12px solid orange;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;

@-webkit-keyframes load8 {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes load8 {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
`
export default Loader
