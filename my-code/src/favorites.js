// This mimicks favorite storing, by keeping a favorites array in the
// browsers' localstorage. Replacing these functions with real api calls,
// and sending the user session token, would be an easy way to make this
// a permanent feature.

export function getFavorites() {
  const favs = localStorage.getItem("favorites")
  if (favs === null) {
    return []
  }
  return favs.split(",")
}

export function addFavorite(id) {
  let favs = getFavorites()
  if (!(id in favs)) {
    favs.push(id)
    localStorage.setItem("favorites", favs.join())
  }
}

export function removeFavorite(id) {
  let favs = getFavorites()
  const index = favs.findIndex(x => x === id)
  console.log(index)
  if (index > -1) {
    favs.splice(index, 1)
    localStorage.setItem("favorites", favs)
  }
}
