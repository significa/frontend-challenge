import styled from 'styled-components';



export const SingleMovieContainer=styled.div`
    display: flex;
    margin: 20px 20px;
    padding: 30px;
    justify-content:space-between;
    flex-wrap: wrap;
    
`

export const Right=styled.div`
    flex:2;
    flex-wrap: wrap;
    margin-right: 40px;
    
    
`
export const Left=styled.div`
    flex:1;
    margin-left: 40px;
    
    
`
export const MovieImage=styled.img`
    border-radius: 5%;
`
export const MovieTitle=styled.h1`
    font-size: 60px;
`
export const TimeNYear=styled.span`
    margin-right: 20px;
`

export const Rating=styled.span`
margin-right: 20px;
border: 1px solid black;;
color: #fff;
padding: 10px 10px;
text-align: center;
border-color: #353f4c;
font-size: 16px;
border-radius: 8px;
align-items: center;
position: relative;

`
export const IMDbRating=styled.img`
 width: 15px;
 height: 15px;
 align-items: center;
 

`
export const RatingPercent=styled.span`
margin-right: 20px;
border: 1px solid black;;
color: #fff;
padding: 10px 10px;
text-align: center;
border-color: #353f4c;
font-size: 16px;
border-radius: 8px;
`

export const FavoriteButton=styled.button`
border: 2px solid black;;
color: #7a8c99;
padding: 10px 10px;
text-align: center;
border-color: #353f4c;
font-size: 16px;
border-radius: 8px;
background-color:#0a1014;
cursor:pointer;
`
export const MovieDescriptionSection=styled.div`
    flex-wrap:wrap;
`
export const MoviePlotTitle=styled.h3`
    color:#7a8c99;
`
export const MovieDescription=styled.p`
    font-size: 16px;
    align-items: center;
    

`
export const MoviePlot=styled.div``
export const Plot=styled.span``
export const Description=styled.p``

export const MovieCast=styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;

`

export const Cast=styled.div`
    margin-right: 25px;
    
    `
export const MovieCastTitle=styled.h3`
    
    color:#7a8c99;
`
export const CastName=styled.span`
    flex-direction:column;
    align-items: center;
`

export const Genre=styled.div`
margin-right: 25px;
`
export const MovieGenreTitle=styled.h3`
color:#7a8c99;
`
export const GenreName=styled.span``
export const Director=styled.div`
    

`
export const MovieDirectorTitle=styled.h3`
color:#7a8c99;
`
export const DirectorName=styled.span``