import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataView from './components/dataView';
import SelectedMovie from './components/selectedMovie';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [theData, setData] = useState([]);

  const [selectedOne, setSelectedOne] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (searchInput.length > 2)
      axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=e5c4c190&s=${searchInput}`)
        .then((response) => {
          setData(response.data);
        });
  }, [searchInput]);

  const setValue = (e) => {
    if (e) setSearchInput(e);
  };

  const selectedMovie = (e) => {
    if (Object.entries(e).length > 0) {
      setSelected(e);
      setSelectedOne(true);
    }
  };

  const data = theData.Search || [];

  function addToFavourite(e, main) {
    if (e.liked) e.liked = false;
    else e.liked = true;

    if (!main) setSelected(e);
    var newD = theData.Search.map((d) => {
      if (d.imdbID === e.imdbID) return e;
      else return d;
    });

    setData({ Search: newD });
  }

  return (
    <div className='main'>
      <div>
        <picture>
          <source
            type='image/png'
            srcSet='img/logos/logo.png 1x, img/logos/logo.png 2x'
          />
          <img className='logo__image' src='img/logos/logo.png' alt='Logo' />
        </picture>
      </div>

      {!selectedOne ? (
        <span className='input-grp'>
          <svg className='icon'>
            <use href='img/icons/icon-magnifier-disabled.svg#Line'></use>
          </svg>
          <label className='input-grp__label'>
            <input
              type='text'
              className='input label__input'
              placeholder='Search Movies...'
              autoComplete='off'
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </span>
      ) : (
        ''
      )}

      {data ? (
        selectedOne ? (
          <SelectedMovie
            data={selected}
            goBack={() => setSelectedOne(false)}
            addToFavourite={(e) => addToFavourite(e, true)}
          />
        ) : (
          <DataView
            data={data}
            selectOne={(e) => selectedMovie(e)}
            addToFavourite={(e) => addToFavourite(e)}
          />
        )
      ) : (
        <h2> Make your Search </h2>
      )}

      <div></div>
    </div>
  );
}

export default App;
