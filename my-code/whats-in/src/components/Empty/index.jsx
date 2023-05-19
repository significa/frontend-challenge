import emptyImage from '../../images/illustration-empty-state@2x.png'

export default function Empty() {
    return (
        <div className='empty'>
            <img className='empty__image' src={emptyImage} alt="Empty search" />
            <h2>Don’t know what to search?</h2>
            <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
        </div>
    )
}