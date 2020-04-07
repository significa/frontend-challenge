import styled from 'styled-components';

export const Description = styled.div`
	background-color: rgba(53, 63, 76, 0.9);
	display: flex;
	cursor: pointer;
	flex-direction: column;
	height: 100%;
	margin-top: 280px;
	padding: 0.5rem;
	transition: 0.2s ease;
`;

export const Container = styled.div`
	background-image: url(${(props) => props.poster});
	background-position: center;
	background-size: cover;
	border-radius: 5px;
	height: 280px;
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
