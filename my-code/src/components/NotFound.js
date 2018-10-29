import React from "react"
import { Flex } from "./Layout"
import { Text300, Link } from "./common/Typography"

import empty from "../assets/illustration-empty-state@2x.png"

const NotFound = () => (
  <Flex mt={8}>
    <img width={396} src={empty} alt="Empty state" />
    <Text300 mt={2} mb={2}>
      Oops, there&#39;s nothing here.
    </Text300>
    <Link href="/" text="Go back" />
  </Flex>
)

export default NotFound
