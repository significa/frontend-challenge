import sc from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = sc.div`
  margin-top: 8px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  }
`
