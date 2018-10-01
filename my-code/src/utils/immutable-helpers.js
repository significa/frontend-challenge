export function addToArray(arr, value) {
  if (arr.includes(value)) return arr
  return [...arr, value]
}

export function removeFromArray(arr, value) {
  const index = arr.indexOf(value)
  if (index === -1) return arr
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
