import React from "react"
import { makeStyles, CircularProgress, Typography } from "@material-ui/core"
import cow from "./assets/cow.png"
import moobee from "./assets/moobee.png"
import bee from "./assets/bee.png"

const useStyles = makeStyles(theme => ({
  loading: {
    alignSelf: "center"
  },
  error: {
    alignSelf: "center",
    color: "red"
  },
  logoWithText: {
    alignSelf: "center",
    textAlign: "center",
    maxWidth: 600
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2)
  },
  cow: {
    width: "25%"
  },
  moobee: {
    height: 32,
    margin: 12
  },
  bee: {
    height: 40
  }
}))

export function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  )
}

export function Error({ message }) {
  const classes = useStyles()
  return (
    <Typography className={classes.error} variant="h4">
      {message}
    </Typography>
  )
}

export function LogoMessage({ message }) {
  const classes = useStyles()
  return (
    <div className={classes.logoWithText}>
      <div className={classes.logoWrapper}>
        <img className={classes.cow} src={cow} alt="Meow, meow, i'm a cow" />
        <img className={classes.moobee} src={moobee} alt="Moooooobeezzzzzz" />
        <img className={classes.bee} src={bee} alt="Maia" />
      </div>
      <Typography variant="h4" color="secondary">
        {message}
      </Typography>
    </div>
  )
}
