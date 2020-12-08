import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTg2NzQwMzQyMF5BMl5BanBnXkFtZTgwNzkzODk2ODE@._V1_SX300.jpg',
    Title: 'Pele: Birth of a Legend',
    Type: 'movie',
    Year: '2016',
    imdbID: 'tt0995868'
  }
} as Meta

export const Default: Story<MovieCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: 'auto' }}>
    <MovieCard {...args} />
  </div>
)

export const NoPoster: Story<MovieCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: 'auto' }}>
    <MovieCard {...args} />
  </div>
)

NoPoster.args = {
  Poster: 'N/A'
}
