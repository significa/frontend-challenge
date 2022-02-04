interface Ratings {
    source: string;
    value: string;
}

export interface MovieData {
    title: string;
    year: string;
    rated: string;
    runtime: string;
    plot: string;
    cast: string[];
    genre: string[];
    director: string[];
    ratings: Ratings[];
    poster: string;
}