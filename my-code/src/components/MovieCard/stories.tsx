import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTg2NzQwMzQyMF5BMl5BanBnXkFtZTgwNzkzODk2ODE@._V1_SX300.jpg',
    title: 'Pele: Birth of a Legend',
    type: 'movie',
    year: '2016',
    id: 'tt0995868'
  }
} as Meta

export const Default: Story<MovieCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: 'auto' }}>
    <MovieCard {...args} />
  </div>
)
