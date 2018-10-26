// @flow

// Types for UI Theming
export type ThemeType = {
  color: {
    main: {
      yellow: string,
      red: string,
      green: string
    },
    grey: {
      dark: string,
      grey: string,
      midgrey: string,
      lightgrey: string,
      white: string
    }
  },
  font: {
    family: string,
    base: string,
    family: string,
    smaller: string,
    small: string,
    large: string,
    display: string
  },
  space: Array<string>,
  transition: string
}

export type PropType = {
  theme: ThemeType,
  active: boolean
}

// Favourites button
export type ButtonPropsType = {
  text: string
}

// IMDB and Rotten Tomatoes
export type LabelPropsType = {
  value: string
}

// Relative to the detail page
export type ActorType = {
  actor: string
}
export type GenreType = {
  actor: string
}

export type DirectorType = {
  actor: string
}

export type RatingsType = {
  Source: string,
  Value: string
}
