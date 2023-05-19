import { Link } from 'react-router-dom';
import logotype from '../../images/logo.svg'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logotype} alt="logotype" />
            </Link>
        </div>
    )
}