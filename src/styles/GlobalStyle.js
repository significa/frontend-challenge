import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	body {
		background-color: #0A1014;
		color: #fff;
		margin: 0px;
		overflow-y: scroll;
		padding: 0px;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Roboto', sans-serif;
	}

	* {
		box-sizing: border-box;
		outline: none;
	}

	ul {
		list-style: none;
		margin: 0px;
		padding: 0px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		line-height: 1.5;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
