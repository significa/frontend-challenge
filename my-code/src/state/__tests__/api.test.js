import { runSaga } from 'redux-saga'
import { search, getMovie } from '../api'

import {
  movieOK,
  errorResponse,
  noMoviesFound,
  searchOK
} from '../../../__mocks__/api'

// Mock fetch call and response. Does not mock network failure.
const mockFetch = ({ data, ok = true }) =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data)
    })
  )

describe('api', () => {
  describe('getMovie', () => {
    it('should call fetch with the right URL params', async () => {
      global.fetch = mockFetch({ data: movieOK })

      await runSaga({}, getMovie, 'tt3987635').done

      expect(global.fetch.mock.calls).toHaveLength(1)

      const url = new URL(global.fetch.mock.calls[0][0])
      expect(url.searchParams.get('i')).toBe('tt3987635')
      expect(url.searchParams.has('apikey')).toBe(true)
    })

    it('should return the correct result', async () => {
      global.fetch = mockFetch({ data: movieOK })

      const result = await runSaga({}, getMovie, 'tt3987635').done

      expect(result).toEqual({
        actors: ['Famous Actor', 'Less Famous Actor'],
        directors: ['Successful Director'],
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        id: 'tt3987635',
        imdbRating: '7.7',
        plot:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
        poster: 'https://example.com/qwerty.jpg',
        rated: 'R',
        rottenRating: '83%',
        runtime: '101 min',
        title: 'The Movie Title',
        year: '2018'
      })
    })

    it('should throw on error response with OK status code', () => {
      global.fetch = mockFetch({ data: errorResponse })

      return expect(
        runSaga(
          {
            // Ignore error
            onError: () => {}
          },
          getMovie,
          'tt3987635'
        ).done
      ).rejects.toEqual(new Error(errorResponse.Error))
    })

    it('should throw on error response with non-OK status code', () => {
      global.fetch = mockFetch({ data: errorResponse, ok: false })

      return expect(
        runSaga(
          {
            // Ignore error
            onError: () => {}
          },
          getMovie,
          'tt3987635'
        ).done
      ).rejects.toEqual(new Error(errorResponse.Error))
    })

    it('should throw on fetch error', () => {
      global.fetch = () => Promise.reject(new Error('Fetch failed'))

      return expect(
        runSaga(
          {
            // Ignore error
            onError: () => {}
          },
          getMovie,
          'tt3987635'
        ).done
      ).rejects.toEqual(new Error('Fetch failed'))
    })
  })

  describe('search', () => {
    it('should call fetch with the right URL params', async () => {
      global.fetch = mockFetch({ data: searchOK })

      await runSaga({}, search, 'star').done

      expect(global.fetch.mock.calls).toHaveLength(1)

      const url = new URL(global.fetch.mock.calls[0][0])
      expect(url.searchParams.get('s')).toBe('star')
      expect(url.searchParams.has('apikey')).toBe(true)
    })

    it('should return the correct result', async () => {
      global.fetch = mockFetch({ data: searchOK })

      const result = await runSaga({}, search, 'star').done

      expect(result).toEqual([
        {
          id: 'tt0076759',
          poster: 'https://example.com/1796.jpg',
          title: 'Star Wars: Episode IV - A New Hope',
          year: '1977'
        },
        {
          id: 'tt0080684',
          poster: 'https://example.com/16683.jpg',
          title: 'Star Wars: Episode V - The Empire Strikes Back',
          year: '1980'
        }
      ])
    })

    it('should handle no results', async () => {
      global.fetch = mockFetch({ data: noMoviesFound })

      const result = await runSaga({}, search, 'qwertyuiop').done

      expect(result).toEqual([])
    })

    it('should throw on fetch error', () => {
      global.fetch = () => Promise.reject(new Error('Fetch failed'))

      return expect(
        runSaga(
          {
            // Ignore error
            onError: () => {}
          },
          search
        ).done
      ).rejects.toEqual(new Error('Fetch failed'))
    })
  })
})
