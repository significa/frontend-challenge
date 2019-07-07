import React from "react"
import { Link } from "react-router-dom"
import { Wrapper } from "./Layout"
import Logo from "../assets/Logo"

const Header = () => (
  <Wrapper py={16} width={1180}>
    <Link to="/">
      <Logo />
    </Link>
  </Wrapper>
)

export default Header
