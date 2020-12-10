import { useEffect, useState } from 'react'
import useSWR from 'swr'

import api from 'services/api'

import { MovieProps } from 'templates/Movie'

type SearchProps = {
  Search?: MovieProps[]
  Respose?: string
  Error?: string
}

const fetcher = (_: unknown, query: string) =>
  api
    .get<SearchProps>(`?s=${query}&type=movie&apikey=3f8e8747`)
    .then((response) => response.data)

export const useSearch = (initialSearch: string) => {
  const [query, setQuery] = useState(initialSearch)
  const { data, error } = useSWR(query ? ['/', query] : null, fetcher)

  const movies: SearchProps | undefined = data

  useEffect(() => {
    setQuery('')
  }, [])

  return {
    movies,
    error,
    query,
    setQuery
  }
}
