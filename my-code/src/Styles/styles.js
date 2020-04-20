import '../Styles/spinner.css';
import styled, { createGlobalStyle } from 'styled-components';
import { colors, size } from '../Styles/global';

/////////////
// app //
////////////
export const GlobalStyle = createGlobalStyle`
	body{
		background-color: ${colors.dark};
	}

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.16px;
		line-height: 24px;
		}

	h1 {
		font-size: 80px;
		font-weight: 700;
		letter-spacing: 0.8px;
		display:inline;
		line-height: 88px;
	}

	h2 {
		font-size: 24px;
		font-weight: 500;
		letter-spacing: 0.2px;
		display:inline;
		line-height: 30px;
		}

	h3 {
		font-size: 20px;
		font-weight: 500;
		letter-spacing: 0.2px;
		display:inline;
		line-height: 28px;
		}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

/////////////
// movies //
////////////
export const Container = styled.div`
	display: grid;
	grid-gap: ${size.gridGap};
	grid-template-columns: repeat(12, 80px);
	margin: ${size.marginGrid};

	@media screen and (max-width: ${size.mobileWidth}) {
		margin: 0px;
		display: flex;
		flex-direction: column;
		grid-gap: 0px;
	}
`;
//
export const SearchMovie = styled.div`
	display: grid;
	grid-column: 1/-1;
	justify-items: center;
	padding: 225px 0 0 0;

	@media screen and (max-width: ${size.mobileWidth}) {
		display: flex;
		flex-direction: column;

		padding: 10px 0 0 0;
		img {
			max-width: 383px;
			width: 100%;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

export const SearchMovieTitle = styled.h2`
	color: ${colors.default};
	padding: 30px 0 0 0;

	@media screen and (max-width: ${size.mobileWidth}) {
		text-align: center;

		font-size: 20px;
		font-weight: 500;
		letter-spacing: 0.2px;
		line-height: 28px;
	}
`;

export const MsgNotFound = styled(SearchMovieTitle)`
	display: grid;
	grid-column: 1/-1;
	justify-items: center;
	padding: 100px 0 0 0;
`;

export const MsgError = styled(SearchMovieTitle)`
	display: grid;
	grid-column: 1/-1;
	justify-items: center;
	padding: 100px 0 0 0;
`;

export const LoadingDIV = styled.div`
	display: grid;
	grid-column: 1/-1;
`;

export const SearchMovieSubTitle = styled.h3`
	color: ${colors.midGrey};
	padding: 5px 0 0 0;

	@media screen and (max-width: ${size.mobileWidth}) {
		text-align: center;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.16px;
		line-height: 24px;
	}
`;
//
export const Cell = styled.div`
	display: grid;
	grid-column: span 2;

	@media screen and (max-width: ${size.mobileWidth}) {
		padding: 0 0 10px 0;

		display: flex;
		flex-direction: column;
		grid-gap: 0px;
	}
`;

export const MovieCardStyle = styled.div`
	position: relative;
	min-height: 260px;

	img {
		display: block;
		width: 100%;
		border: none;
		border-radius: 7px;

		/* Image N/A [ex:"vapor"]*/
		&:after {
			position: absolute;
			top: 50%;
			left: 25%;

			content: "\f127";
			font-size: 100px;
			font-family: FontAwesome;
			color: ${colors.default};

			@media screen and (max-width: ${size.mobileWidth}) {
				width: 50%;
				text-align: center;
			}
		}
	}

	@media screen and (max-width: ${size.mobileWidth}) {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const MovieFavorite = styled.div`
	width: 32px;
	height: 32px;

	text-align: right;
	position: absolute;

	top: 12px;
	right: 12px;

	z-index: 9;

	opacity: 0;
	transition: .2s ease;
`;

export const MovieLink = styled.div`
	position: absolute;

	width: 100%;
	height: 100%;

	opacity: 0;
	transition: .2s ease;
`;

export const MovieHover = styled.div`
	position: absolute;

	width: 100%;
	height: 100%;

	top: 0;
	left: 0;

	z-index: 1;

	&:hover {
		${MovieFavorite}, ${MovieLink} {
			opacity: 1;
		}
		background: rgba(0, 0, 0, .7);
		border: none;
		border-radius: 7px;
	}

	${({ hasFavorite }) => {
		if (hasFavorite) {
			return `
				${MovieFavorite} {
					opacity: 1;
				}
				`;
		}
	}};
`;

export const MovieTitleYear = styled.div`
	color: ${colors.default};
	position: absolute;
	bottom: 12px;
	right: 12px;
	left: 12px;
`;

export const MovieTitle = styled.h3`padding: 0 0 3px 0;`;

export const MovieYear = styled.div`font-size: 12pt;`;

//////////////////
// movieDetails //
//////////////////

export const ContainerMovieDetails = styled.div`
	display: grid;
	grid-row-gap: ${size.gridRowGap};
	grid-column-gap: ${size.gridColumnGap};
	grid-template-columns: repeat(12, 80px);

	margin: ${size.marginGrid};

	@media screen and (max-width: ${size.mobileWidth}) {
		margin: 0px;
		display: flex;
		flex-direction: column;
		grid-gap: 0px;
	}
`;

//
export const TimeYearRated = styled.div`
	grid-column: 1/4;
	grid-row: 2;
	@media screen and (max-width: ${size.mobileWidth}) {
		padding: ${size.MovieDetailsPadding};
	}
`;

export const TimeYear = styled.h3`
	color: ${colors.secondary};
	@media screen and (max-width: ${size.mobileWidth}) {
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.16px;
		line-height: 24px;
	}
`;

export const Rated = styled(TimeYear)`
	background: ${colors.secondary};
	border-radius: 5px;
	padding: 4px 6px;
	color: ${colors.dark};
`;

export const Dot = styled(TimeYear)`
	padding: 0 8px 0 8px;
	&:after {
			content: "\f111";
			vertical-align: middle;
			font-size: 3px;
			font-family: FontAwesome;
			}
`;

//
export const MainTitle = styled.h1`
	color: ${colors.default};
	grid-column: 1/8;
	grid-row: 3;

	@media screen and (max-width: ${size.mobileWidth}) {
		font-size: 40px;
		font-weight: 700;
		letter-spacing: 0.4px;
		line-height: 44px;

		padding: ${size.MovieDetailsPadding};
	}
`;
//
export const LabelsGridWrapper = styled.div`
	color: blue;
	grid-column: 1/6;
	grid-row: 4;

	@media screen and (max-width: ${size.mobileWidth}) {
		order: 2;
		padding: ${size.MovieDetailsPadding};
	}
`;

export const LabelsFlexWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const Label = styled.div`
	border-radius: 5px 0 0 5px;

	padding: 12px 8px;
	height: 44px;

	img {
		height: 100%;
	}
`;

export const ImdbLabel = styled(Label)`
	background: ${colors.highlight};
	border: 1px solid ${colors.highlight};
	border-right: 0;
`;

export const TomatoesLabel = styled(Label)`
	background: ${colors.negative};
	border: 1px solid ${colors.negative};
	border-right: 0;
`;

export const Rating = styled.div`
	border-radius: 0 5px 5px 0;
	padding: 12px 8px;
	height: 44px;
	margin-right: 16px;
	color: ${colors.default};
	font-size: 18px;
	line-height: normal;
	@media screen and (max-width: ${size.mobileWidth}) {
		margin-right: 3px;
	}
`;

export const ImdbRating = styled(Rating)`
	background: ${colors.dark};
	border: 1px solid ${colors.midGrey};
	border-left: 0;
`;

export const TomatoesRating = styled(Rating)`
	background: ${colors.dark};
	border: 1px solid ${colors.midGrey};
	border-left: 0;
`;

//
export const SecondaryTitle = styled.p`
	padding: 0 0 5px 0;
	color: ${colors.secondary};
	font-weight: 700;

	@media screen and (max-width: ${size.mobileWidth}) {
		padding: 0;
	}
`;

export const Text = styled.p`color: ${colors.default};`;

export const PlotWrapper = styled.div`
	grid-column: 1/7;
	grid-row: 5;
	@media screen and (max-width: ${size.mobileWidth}) {
		order: 2;
		padding: ${size.MovieDetailsPadding};
	}
`;

export const CastWrapper = styled.div`
	grid-column: 1/4;
	grid-row: 6;
	@media screen and (max-width: ${size.mobileWidth}) {
		order: 2;
		padding: ${size.MovieDetailsPadding};
	}
`;

export const GenreWrapper = styled.div`
	grid-column: 4/5;
	grid-row: 6;

	@media screen and (max-width: ${size.mobileWidth}) {
		order: 2;
		padding: ${size.MovieDetailsPadding};
	}
`;

export const DirectorWrapper = styled.div`
	grid-column: 5/7;
	grid-row: 6;

	@media screen and (max-width: ${size.mobileWidth}) {
		order: 2;
	}
`;

export const Image = styled.div`
	grid-column: 8/-1;
	grid-row: 2/7;

	img {
		width: 100%;
		border-radius: 10px;

		display: block;
		position: relative;

		/* Image N/A [ex:"vapor"]*/
		&:after {
			content: "\f127";
			font-size: 150px;
			font-family: FontAwesome;
			color: ${colors.default};

			display: flex;
			align-items: center;
			justify-content: start;
			height: 150px;

			@media screen and (max-width: ${size.mobileWidth}) {
				justify-content: center;
			}
		}
	}

	@media screen and (max-width: ${size.mobileWidth}) {
		order: 1;
		padding: ${size.MovieDetailsPadding};
	}
`;

/////// ///////
// SearchBar //
///// /  //////

export const SearchBarStyle = styled.div`
	display: grid;
	grid-column: 1/-1;
	align-self: start;
	position: relative;

	@media screen and (max-width: ${size.mobileWidth}) {
		width: 100%;
		padding: 0 0 10px 0;
	}

	input {
		height: 44px;
		border: none;
		border-radius: 7px;
		padding: 12px 0px 12px 38px;
		&:placeholder {
			color: ${colors.secondary};
		}
	}

	i {
		position: absolute;
		padding: 0px 12px 0px 12px;

		top: 12px;
		z-index: 1;
		color: ${colors.secondary};
	}
`;

////////////
// Button //
////////////
export const ButtonDefault = styled.button`
	background-color: ${colors.dark};
	color: ${colors.secondary};

	padding: 12px 16px 12px 12px;

	&:hover {
		color: ${colors.default};
	}
`;

export const ButtonPrimaryStyle = styled(ButtonDefault)`

	border: 1px solid ${colors.midGrey};
    border-radius: 5px;
	height: 44px;

	display: flex;

    &:hover {
		border-color: ${colors.negative};
	}

    i {
		padding: 0 12px 0 0;
		font-size: 18px;

		display: flex;
		align-items: center;

		&:hover {
			color: ${colors.default};
		}
	}

	p {
		display: flex;
		align-items: center;
		line-height: normal;
		font-size: 18px;
	}
`;

export const ButtonPrimaryActiveStyle = styled(ButtonPrimaryStyle)`
    background-color: ${colors.negative};
    color: ${colors.default};
	border: 1px solid ${colors.negative};
`;

export const ButtonLinkStyle = styled(ButtonDefault)`

	padding: 0px;
	display: grid;
	align-self: start;

	font-size:28px;

    grid-column: 1/2 ;
	grid-row: 1;
	justify-self: start;

    border: none;
	background-color: transparent;
	
	@media screen and (max-width: ${size.mobileWidth}) {
		padding:  0 0 10px 0;
	}
`;
////
export const ButtonCardStyle = styled(ButtonLinkStyle)`
	padding: 0px;
	color: ${colors.default};
	text-shadow: 0 0 10px grey;

	width: 100%;
	height: 100%;
	font-size: 24px;
`;
