Forked from [Significa Frontend Challenge](https://github.com/Significa/frontend-challenge)

## Welcome to the _Moobies App_

An humble attempt at solving this challenge. This app mostly follows the visual footprint and usage of the demo page, with some fairly small stylistic re-interpretations.

### Resources

Besides core HTML/JS/React app structure, MaterialUI was installed as the chosen UI framework for its simplicity, up-to-date looks, and overall vast library of components. This also led that any styling would be done by m-UI's makeStyles, instead of a more standard CSS manner.

The code has been automagically formatted using prettier.

### Get it started

To get the App up and running, simply download or clone this repository and navigate to `/frontend-challenge/my-code`. From there either setup a development build and server with `yarn run start`, or build it for production with `yarn run build`.

### Search results

As suggested, _OMDd API_ is being used for data fetching. They apply a rule to all search queries, limiting the number of results to 10. In order to overcome this, when searching for movies, we first lookup the total amount of movies that fit the search query, then use it to request all of them, page by page, 10 at a time.

While this certainly bypasses the limitation, we certainly don't need to abuse this open source effort from _OMDb_, so a limit was hard-corded into the code, of 10 pages per query (which is still 100 movies max).

Also, for visual reasons, any movie that does not include a Poster is not being rendered in the movie grid. Alternatively, a placeholder could have been used, but it wouldn't add much to the demonstration value of the challenge.

### Favorites

We all have them! So a persistence system was mocked for "liking" movies, using the not-so-proper-but-works-for-this browser's localStorage. This would allow, if needed be, to quickly replace the current functions with calls to a proper storage API.

### So...

This was a hell'a lot of fun to build! Hopefully it'll be up to good standards.

Feel free to contact me @: a.fortuna.dias@gmail.com

António Dias
