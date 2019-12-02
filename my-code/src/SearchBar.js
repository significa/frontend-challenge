import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider, Paper, InputBase, IconButton } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
  root: {
    position: "sticky",
    top: theme.spacing(2),
    zIndex: 1,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

export default function SearchBar({ onSearch }) {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState("")

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search movies..."
        value={searchValue}
        onChange={ev => setSearchValue(ev.currentTarget.value)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={ev => {
          ev.preventDefault()
          onSearch(searchValue)
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
