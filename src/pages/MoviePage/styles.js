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

	@media (min-width: 768px) {
		grid-template-columns: 1fr 350px;
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 500px;
	}
`;

export const Details = styled.div`
	display: grid;
	grid-gap: 1rem;
	margin-bottom: auto;
	margin-right: 1.5rem;

	@media (max-width: 768px) {
		background: linear-gradient(to right, #0a1014 21%, transparent 94%);
		min-height: 100vh;
		padding: 1.5rem;
	}

	@media (min-width: 992px) {
		margin-right: 3rem;
	}
`;

export const Poster = styled.div`
	background-image: url(${(props) => props.source});
	background-position: center;
	background-size: cover;
	border-radius: 10px;
	height: 600px;
	width: 100%;

	@media (max-width: 768px) {
		height: 100vh;
		opacity: 0.15;
		position: absolute;
		right: 1rem;
		width: calc(100% - 2rem);
		z-index: -1;
	}

	@media (min-width: 992px) {
		height: 750px;
	}
`;

export const Row = styled.div`
	@media (min-width: 576px) {
		align-items: center;
		display: flex;
	}

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
	font-size: 3rem;
	font-weight: 700;
	margin: 0px;

	@media (min-width: 768px) {
		font-size: 5rem;
	}
`;

export const Subtitle = styled.h4`
	color: #7a8c99;
	font-size: 1rem;
	font-weight: 500;
	margin: 0px;
	margin-top: 1rem;
`;

export const Plot = styled.p`
	margin-bottom: 0px;

	@media (min-width: 992px) {
		width: 80%;
	}
`;

export const List = styled.div`
	display: none;
	margin-bottom: auto;
	margin-right: 1.5rem;

	@media (min-width: 576px) {
		display: block;
	}

	@media (min-width: 768px) {
		margin-right: 2rem;
	}

	@media (min-width: 992px) {
		margin-right: 3rem;
	}

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
