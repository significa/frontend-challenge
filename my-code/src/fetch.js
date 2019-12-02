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
        setError(error)
      }
    }
    fetchData()
  }, [url])
  return response
}

export function useMovieList(queryText) {
  const response = useFetch(
    `http://www.omdbapi.com/?s=${queryText}&type=movie&apikey=${apiKey}`,
    "GET"
  )

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (response && !isLoading) {
      setIsLoading(true)
    }
  }, [response])

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) return
      let ls = []
      let error = null

      for (let i = 1; i <= Math.floor(response.totalResults / 10); i++) {
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
      setList(ls)
      setIsLoading(false)
    }
    fetchData()
  }, [isLoading])

  return { list, isLoading, error }
}
