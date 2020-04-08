import styled from 'styled-components';

import illustration from '../../assets/img/illustration-empty-state.png';

export const Container = styled.main`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	max-width: 1200px;
	min-height: 100vh;
	padding: 1rem;
	width: 100%;
`;

export const Empty = styled.section`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 100%;
`;

export const Illustration = styled.div`
	background-image: url(${illustration});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 220px;
	margin-top: 2rem;
	max-width: 440px;
	width: 100%;

	@media (min-width: 576px) {
		background-size: cover;
	}
`;

export const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 500;
	margin: 0.75rem 0px;
`;

export const Subtitle = styled.h3`
	color: #7a8c99;
	font-size: 1rem;
	font-weight: 400;
	margin: 0px;
`;

export const SearchBar = styled.section`
	align-items: center;
	background-color: #fff;
	border: 1px solid #eee;
	border-radius: 5px;
	display: flex;
	overflow: hidden;
	padding-left: 0.75rem;
	width: 100%;

	label {
		color: #7a8c99;
		display: flex;
	}

	input {
		border: none;
		font-size: 1rem;
		padding: 0.75rem;
		width: 100%;
	}
`;

export const Results = styled.section`
	display: grid;
	grid-gap: 1rem;
	margin-bottom: auto;
	margin-top: 2rem;
	width: 100%;

	@media (min-width: 430px) {
		grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
	}
`;
