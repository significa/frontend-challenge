import { Link } from 'react-router-dom';
import logotype from '../../images/logo.svg'

export default function Header( {clearSearch} ) {
    return (
        <div className="header">
            <Link to="/" onClick={() => clearSearch()}>
                <img src={logotype} alt="logotype" />
            </Link>
        </div>
    )
}