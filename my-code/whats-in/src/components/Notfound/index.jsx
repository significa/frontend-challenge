import notFoundImage from '../../images/illustration-notfound-state@2x.png'

export default function NotFound() {
    return (
        <div className='state'>
            <img className='state__image--not-found' src={notFoundImage} alt="Empty search" />
            <h2>Nothing was found...</h2>
            <p className='state__subheader--lightgrey'>We all go a little mad sometimes</p>
        </div>
    )
}