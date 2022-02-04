import { ChangeEvent, FormEvent, useState } from "react";
import { SearchData } from "../../interfaces/detail";
import fetchApiData from "../../utils/fetchData";
import Card from "../card/card";

export default function Home() {
    const [searchVal, setSearchVal] = useState('');
    const [results, setResults] = useState<SearchData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    /**
     * make a request based on the search input value
     */
    async function searchApi(search: string) {
        if (search.trim() === '') {
            alert('Search cannot be empty!');
            return;
        }
        setError('');
        setResults([]);
        setLoading(true);
        const url = `http://www.omdbapi.com/?apikey=b02d2b50&s${search}`;
        const { data, error } = await fetchApiData<SearchData>(url);
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
                    {/* <SearchIcon height='20' color='grey' /> */}
                </span>
                <input className="search-input" type="text" placeholder="search tv series..." value={searchVal} onChange={e => onSearchChange(e)} />
            </form>
            {loading ?
            <>
                {/* <Spinner /> */}
                <h5 style={{color: 'green'}}>Looking up {searchVal}</h5>
            </>
            :
            error ?
            <h5 style={{color: 'red'}}>There was an error with your search: {error}</h5>
            :
            <div className="results-wrapper">
                {results.map((item: SearchData, i) => {
                    return <Card key={i} {...item} />
                })}
            </div>
            }
        </div>
    )
}