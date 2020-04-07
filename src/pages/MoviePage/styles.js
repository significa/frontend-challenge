import styled from 'styled-components';

export const Container = styled.main`
	margin: auto;
	max-width: 1200px;
	min-height: 100vh;
	padding: 1rem;
	width: 100%;
`;

export const GoBackButton = styled.button`
	background: none;
	border: none;
	color: #7a8c99;
	display: block;
	margin: 1rem 0px;
	padding: 0px;
	transition: 0.15s ease;

	&:hover {
		color: #fff;
	}
`;

export const Movie = styled.section`
	display: grid;
	grid-template-columns: 1fr 500px;
`;

export const Details = styled.div`
	display: grid;
	grid-gap: 1rem;
	margin-bottom: auto;
	margin-right: 3rem;
`;

export const Poster = styled.div`
	background-image: url(${(props) => props.source});
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	height: 750px;
	width: 100%;
`;

export const Row = styled.div`
	align-items: center;
	display: flex;

	&:nth-child(1) span {
		color: #7a8c99;
		font-size: 1.15rem;
		margin-right: 1rem;

		&:last-child {
			background-color: #7a8c99;
			border-radius: 4px;
			color: #0a1014;
			font-weight: 500;
			padding: 0.25rem 0.375rem;
		}
	}
`;

export const Title = styled.h2`
	font-size: 5rem;
	font-weight: 700;
	margin: 0px;
`;

export const Subtitle = styled.h4`
	color: #7a8c99;
	font-size: 1rem;
	font-weight: 500;
	margin: 0px;
	margin-top: 1rem;
`;

export const Plot = styled.p`
	width: 80%;
	margin-bottom: 0px;
`;

export const List = styled.section`
	margin-bottom: auto;
	margin-right: 3rem;

	ul li {
		margin: 0.5rem 0px;
	}
`;

export const Label = styled.div`
	display: flex;

	img {
		background-color: #ff9f1c;
		border-bottom-left-radius: 4px;
		border-top-left-radius: 4px;
		padding: 0.5rem;
	}

	span {
		border: 1px solid #7a8c99;
		border-bottom-right-radius: 4px;
		border-left: none;
		border-top-right-radius: 4px;
		padding: 0.5rem;
	}
`;

export const AddToFavouritesButton = styled.button`
	align-items: center;
	background: ${(props) => (props.favourite ? '#ff4040' : 'none')};
	border: 1px solid ${(props) => (props.favourite ? '#ff4040' : '#7a8c99')};
	border-radius: 4px;
	color: ${(props) => (props.favourite ? '#fff' : '#7a8c99')};
	display: flex;
	font-size: 1rem;
	margin-left: 1rem;
	padding: 0.5rem;
	transition: 0.15s ease;

	&:hover {
		color: #fff;
		border-color: #ff4040;
	}

	span {
		margin-left: 0.375rem;
	}

	svg {
		display: flex;
	}
`;
