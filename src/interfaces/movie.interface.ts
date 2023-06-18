export interface IMovie {
    backdrop_path: string;
    homepage: string;
    adult: boolean;
    belongs_to_collection: object;
    budget: number;
    genres: object;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: object;
    production_countries: object;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: object;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: object;
    vote_average: number;
    vote_count: number;
}