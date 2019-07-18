import React from "react"

import { Wrapper } from "../Layout"
import { SmallText } from "../common/Typography"

const Kicker = param => (
    <Wrapper mt={6} mb={4}>
          <SmallText grey>
            {param.prop.info.Runtime ? param.prop.info.Runtime : "Unknown runtime"} ·&nbsp;
          </SmallText>
          <SmallText grey>
            {param.prop.info.Year ? param.prop.info.Year : "Unknown year"} ·&nbsp;
          </SmallText>
          <SmallText grey>
            {param.prop.info.Rated ? param.prop.info.Rated : "No rating"}
          </SmallText>
    </Wrapper>
)

export default Kicker