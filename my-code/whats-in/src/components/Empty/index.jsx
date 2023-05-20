import emptyImage from '../../images/illustration-empty-state@2x.png'
import { useNavigate } from 'react-router-dom';

export default function Empty( ) {
const navigation = useNavigate();

    const handleNavigation = () => {
        navigation('/')
    }

    return (
        <div onClick={handleNavigation} className='state'>
            <img className='state__image' src={emptyImage} alt="Empty search" />
            <h2>Don’t know what to search?</h2>
            <p className='state__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
        </div>
    )
}