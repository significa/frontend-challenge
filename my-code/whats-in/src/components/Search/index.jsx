import iconSearch from '../../images/icon-magnifier-grey.svg'

export default function Search( {onSearch} ) {

    const handleChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <div className='search'>
            <input onChange={handleChange} className='search__input' type="text" placeholder='Search movies...'/>
            <img className='search__icon' src={iconSearch} alt="Search icon" />
        </div>
    )
}