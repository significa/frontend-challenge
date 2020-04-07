import styled from 'styled-components';

import logo from '../../assets/img/logo.svg';

const Logo = styled.img`
	margin-bottom: 1rem;
	margin-right: auto;
`;

Logo.defaultProps = {
	src: logo,
	alt: `What's in's logo`,
};

export default Logo;
