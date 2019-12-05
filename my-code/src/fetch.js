import { useState, useEffect } from "react"

// This key would be fetch'd on App load
export const apiKey = "1d66d490"

export function useFetch(url, method) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url, { method })
      if (resp.ok) {
        setResponse(await resp.json())
      } else {
        setError(resp.error)
      }
    }
    fetchData()
  }, [url, method])
  return [response, error]
}

// omdbapi only provides a maximum of 10 search results, on a given request
// to overcome this we first find out the number of search results, for the searched text
// and then request however many pages we need. Even so, we don't need to abuse
// this open source api, so we applied a maxPages limit, to avoid overflooding with requests

const maxPages = 10

export function useMovieList(queryText) {
  const [response, err] = useFetch(
    `http://www.omdbapi.com/?s=${queryText}&type=movie&apikey=${apiKey}`,
    "GET"
  )

  const [list, setList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(err)

  useEffect(() => {
    if (!isLoading && response) {
      setIsLoading(true)
    }
  }, [response])

  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        let ls = []
        let error = null

        for (
          let i = 1;
          i <= Math.min(Math.floor(response.totalResults / 10), maxPages);
          i++
        ) {
          const resp = await fetch(
            `http://www.omdbapi.com/?s=${queryText}&type=movie&page=${i}&apikey=${apiKey}`,
            { method: "GET" }
          )
          if (resp.ok) {
            const data = await resp.json()
            ls.push(...data.Search)
          } else {
            error = resp.error
          }
        }

        setError(error)
        setIsLoading(false)
        setList(ls)
      }
    }
    fetchData()
  }, [queryText, isLoading, response])

  return { list, isLoading, error }
}
