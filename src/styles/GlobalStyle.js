import { createGlobalStyle } from 'styled-components';

import { backgroundColor } from '../colors';

const GlobalStyle = createGlobalStyle`

	body {
		background-color: ${backgroundColor};
		color: #fff;
		margin: 0px;
		padding: 0px;
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

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
