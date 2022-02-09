import Logo from '../../assets/2.Logos/logo.png';

import './header.css';

export default function Header() {
    return (
        <div className="header-wrapper">
            <img src={Logo} alt="header" />
        </div>
    )
}