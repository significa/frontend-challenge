import './header.css';
import Logo from '../../assets/2.Logos/logo.png';

export default function Header() {
    return (
        <div className="header-wrapper">
            <img src={Logo} alt="header" />
        </div>
    )
}