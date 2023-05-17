import logotype from '../../images/logo.svg'

export default function Header() {
    return (
        <div className="header">
            <img src={logotype} alt="logotype" />
        </div>
    )
}