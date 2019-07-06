import React from 'react';

const Movie = ({ movie }) => (
    <section className="Movie-listing">
        <h3 className="name">{movie.title}</h3>
        <section>
            <figure>
                <img src={movie.url} alt={movie.title} />
            </figure>
        </section>
    </section>
);

export default Movie;