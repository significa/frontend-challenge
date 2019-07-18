import React from "react"
import { Wrapper, FlexLeft } from "../Layout"
import { SmallerText} from "../common/Typography"

const Information = param => (
        <div>
        <FlexLeft mb={5}>
          <SmallerText grey mb={2}>
            Plot
          </SmallerText>
          <SmallerText>
            {param.prop.info.Plot
              ? param.prop.info.Plot
              : "There's no param.prop.information available"}
          </SmallerText>
        </FlexLeft>

        <Wrapper mb={5}>
          <FlexLeft pr={56}>
            <SmallerText grey mb={2}>
              Cast
            </SmallerText>
            <div>
              {param.prop.info.Actors
                ? renderInfos(param.prop.info.Actors)
                : "There's no param.prop.information available"}
            </div>
          </FlexLeft>

          <FlexLeft pr={56}>
            <SmallerText grey mb={2}>
              Genre
            </SmallerText>
            <div>
              {param.prop.info.Genre
                ? renderInfos(param.prop.info.Genre)
                : "Unknow genre"}
            </div>
          </FlexLeft>

          <FlexLeft pr={56}>
            <SmallerText grey mb={2}>
              Director
            </SmallerText>
            <div>
              {param.prop.info.Director 
                ? renderInfos(param.prop.info.Director) 
                : "Unknow director"}
            </div>
          </FlexLeft>
        </Wrapper>
        </div>
)

function renderInfos(items) {
  return items.split(",").map(item => (<SmallerText key={item}>{item}</SmallerText>))
}


export default Information