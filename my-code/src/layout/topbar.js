import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo"
import Wrapper from "./Wrapper"

const TopBar = () => (
  <Wrapper py={16} width={1180}>
    <Link to="/">
      <Logo />
    </Link>
  </Wrapper>
)

export default TopBar
