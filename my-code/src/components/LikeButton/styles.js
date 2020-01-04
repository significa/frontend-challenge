import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: none;
  background: transparent;
  border: 0;
  line-height: 0;
  padding: 10px;

  &.liked {
    display: block;

    img {
      filter: drop-shadow(0px 0px 3px #666);
    }
  }

  .movie-wrapper:hover & {
    display: block;
  }
`;
