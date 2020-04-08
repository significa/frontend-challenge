import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Description = styled.div`
	background-color: rgba(53, 63, 76, 0.9);
	display: flex;
	cursor: pointer;
	flex-direction: column;
	height: 100%;
	margin-top: calc((100vw - 2rem) * 1.333);
	padding: 0.5rem;
	transition: 0.2s ease;

	@media (min-width: 430px) {
		margin-top: 270px;
	}
`;

export const Container = styled(Link).attrs((props) => ({
	style: {
		backgroundImage: `url(${props.source})`,
	},
}))`
	background-position: center;
	background-size: cover;
	border-radius: 5px;
	height: calc((100vw - 2rem) * 1.333);
	overflow: hidden;

	button {
		background: none;
		border: none;
		color: #fff;
		display: block;
		margin-left: auto;
	}

	&:hover > ${Description} {
		margin-top: 0px;
	}

	@media (min-width: 430px) {
		height: 270px;
	}
`;

export const Title = styled.h3`
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
	margin-top: auto;
`;

export const Year = styled.h5`
	font-size: 1rem;
	font-weight: 400;
	margin: 0px;
`;
