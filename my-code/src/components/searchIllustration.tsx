import Illustration from '../assets/2.Illustrations/illustration-empty-state.png';

export default function SearchIllustration() {
    return (
        <div className="search-illustration">
            <img src={Illustration} alt='illustration' />
            <div className="info">
                <h4>Dont know what to search?</h4>
                <h5>Here's an offer you can't refuse</h5>
            </div>
        </div>
    )
}