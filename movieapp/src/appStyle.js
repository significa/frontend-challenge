import styled from 'styled-components';

export const Container= styled.div`
  display: flex;
  flex-direction: column;
  `;

  export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const SearchBox= styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  `;
export const SearchIcon = styled.img`
width: 20px;
  height: 20px;
  background-color: white;
  `;
export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  `;
export const EmptySearch=styled.div``

export const Placeholder = styled.img`
margin-top: 150px;
align-items:center;
justify-content: center;

  
`;
export const SearchSuggestion=styled.div`
  align-items:center;
  justify-content: center;
  text-align:center;
  font-size: 24px;
  color:#fff;
`
export const Offer=styled.div`
align-items:center;
margin: 8px;
  justify-content: center;
  text-align:center;
  font-size: 16px;
  color: #7a8c99;
`

export const MovieListContainer=styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
export const MovieList=styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap:25px;
`;

