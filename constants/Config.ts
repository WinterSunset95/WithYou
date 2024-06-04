export const API_KEY = process.env.TMDB_API_KEY

export const ANIME_API = "https://consumet-api-dgfy.vercel.app/"
export const MOVIEDB = "https://api.themoviedb.org/3/"
export const PROXY = "https://api.allorigins.win/get?url="

export const topAnime = `${ANIME_API}anime/zoro/top-airing`
export const searchAnime = (query: string, page?: number) => `${ANIME_API}anime/zoro/${query}?page=${page ? page : 1}`
export const animeDetails = (id: string) => `${ANIME_API}anime/zoro/info?id=${id}`
export const streamingLinks = (id: string) => `${ANIME_API}anime/zoro/watch/${id}`

export const popularMovies = `${PROXY}${MOVIEDB}movie/popular?api_key=${API_KEY}`
export const trendingMovies = `${PROXY}${MOVIEDB}trending/movie/week?api_key=${API_KEY}`
export const movieDetails = (id: string) => `${PROXY}${MOVIEDB}movie/${id}?api_key=${API_KEY}`

export const popularTv = `${PROXY}${MOVIEDB}tv/popular?api_key=${API_KEY}`
export const trendingTv = `${PROXY}${MOVIEDB}trending/tv/week?api_key=${API_KEY}`
export const tvDetails = (id: string) => `${PROXY}${MOVIEDB}tv/${id}?api_key=${API_KEY}`
