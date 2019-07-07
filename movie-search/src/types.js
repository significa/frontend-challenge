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
  active: boolean,
  grey: string,
  image: string
}

// Favourites button
export type ButtonPropsType = {
  text: string
}

// Link component
export type LinkPropType = {
  href: string,
  text: string
}

export type ThumbnailPropType = {
  href: string,
  poster: string,
  title: string,
  year: string
}

// IMDB and Rotten Tomatoes
export type LabelPropsType = {
  value: string
}

// Relative to the detail page
export type RatingsType = {
  Source: string,
  Value: string
}

export type DirectorType = string
export type ActorType = string
export type GenreType = string
