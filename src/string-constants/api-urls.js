export const PRE_API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "1f4530e22cc8d7f3e0bdd2f0fde50d87";
export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjQ1MzBlMjJjYzhkN2YzZTBiZGQyZjBmZGU1MGQ4NyIsInN1YiI6IjY0ZjAyNDFkM2E5OTM3MDBlMmY3NzU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9--_LBM-h3yqjp0yjyJh2l02g_yua2Vnh4YCYOMNlJo";
export const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
export const getMoviesUrl =
  "discover/movie?language=en&sort_by=popularity.desc";

// export default [PRE_API_URL, API_KEY, API_TOKEN, options, getMoviesUrl];
