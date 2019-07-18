import React from "react";

import { Wrapper } from "../Layout"

import { IMDBLabel, RottenLabel } from "../common/Label"
import { BigText } from "../common/Typography"
import Button from "../common/Button"

const TitleMenu = param => (
    <div>
        <BigText mb={5}>{param.prop.info.Title}</BigText>
          {param.prop.info.Ratings ? (
            <Wrapper mb={5}>
              {param.prop.info.Ratings.map(ratings => (
                <div key={param.prop.info.Title}>
                  <div>
                    {ratings.Source === "Internet Movie Database" && (
                      <IMDBLabel value={ratings.Value} />
                    )}
                  </div>
                  <div>
                    {ratings.Source === "Rotten Tomatoes" && (
                      <RottenLabel value={ratings.Value} />
                    )}
                  </div>
                </div>
              ))}
              {param.prop.favorite ? (
                <Button
                  text="Favorited"
                  onClick={param.prop.toggleFavorite}
                  active={param.prop.favorite}
                />
              ) : (
                <Button
                  text="Add to favorites"
                  onClick={param.prop.toggleFavorite}
                  active={param.prop.favorite}
                />
              )}
            </Wrapper>
          ) : null }
    </div>
)

export default TitleMenu