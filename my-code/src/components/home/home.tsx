import { ChangeEvent, FormEvent, useState } from "react";
import { SearchData } from "../../interfaces/detail";
import fetchApiData from "../../utils/fetchData";
import Card from "../card/card";
import Spinner from "../spinner/spinner";

import SearchIcon from '../../assets/1.Icons/icon-magnifier-grey.svg';
import SearchIllustration from '../../assets/2.Illustrations/illustration-empty-state.png';

import './home.css';

export default function Home() {
    const [searchVal, setSearchVal] = useState('');
    const [results, setResults] = useState<SearchData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showIllustration, setShowIllustration] = useState(true);

    /**
     * make a request based on the search input value
     */
    async function searchApi(search: string) {
        if (search.trim() === '') {
            alert('Search cannot be empty!');
            return;
        }
        setShowIllustration(false);
        setError('');
        setResults([]);
        setLoading(true);
        const url = `http://www.omdbapi.com/?apikey=b02d2b50&s=${search}`;
        const { data, error } = await fetchApiData<SearchData[]>(url);
        setLoading(false);
        if (error) {
            setError(error);
        } else {
            setResults(data);
        }
    }

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchVal(event.target.value);
    }
    
    const onSearchHandler = (event: FormEvent) => {
        event.preventDefault();
        searchApi(searchVal)
    }

    return (
        <div>
            <form className="search-form" onSubmit={e => onSearchHandler(e)}>
                <span className="search-icon">
                    <img src={SearchIcon} alt="icon" />
                </span>
                <input className="search-input" type="text" placeholder="Search movies..." value={searchVal} onChange={e => onSearchChange(e)} />
            </form>
            {showIllustration ?
                <div className="search-illustration">
                    <img src={SearchIllustration} alt='illustration' />
                    <div className="info">
                        <h4>Dont know what to search?</h4>
                        <h5>Here's an offer you can't refuse</h5>
                    </div>
                </div>
                : null}
            {loading ?
            <>
                <Spinner />
                <h5 style={{color: 'green'}}>Looking up {searchVal}</h5>
            </>
            :
            error ?
            <h5 style={{color: 'red'}}>There was an error with your search: {error}</h5>
            :
            <div className="results-wrapper">
                {results?.map((item: SearchData, i) => {
                    return <Card key={i} title={item.Title} year={item.Year} poster={item.Poster}  />
                })}
            </div>
            }
        </div>
    )
}