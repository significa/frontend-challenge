import styled from 'styled-components';

export const Container = styled.button`
	align-items: center;
	background: ${(props) => (props.favourite ? '#ff4040' : 'none')};
	border: 1px solid ${(props) => (props.favourite ? '#ff4040' : '#7a8c99')};
	border-radius: 4px;
	color: ${(props) => (props.favourite ? '#fff' : '#7a8c99')};
	display: flex;
	font-size: 1rem;
	margin-top: 1rem;
	padding: 0.5rem;
	transition: 0.15s ease;

	@media (min-width: 576px) {
		margin-left: 1rem;
		margin-top: 0px;
	}

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
