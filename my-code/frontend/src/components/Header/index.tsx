import React from "react";
import { Container } from "./styles";
import { FaPlay } from "react-icons/fa";
const Header: React.FC = () => {
  return (
    <Container>
      <div className="circle-shape">
        <FaPlay />
      </div>
      <strong>What's in</strong>
    </Container>
  );
};

export default Header;
