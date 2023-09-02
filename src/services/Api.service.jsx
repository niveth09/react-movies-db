import {
  options,
  PRE_API_URL,
  getMoviesUrl,
  API_TOKEN,
} from "../string-constants/api-urls";

export const getMoviesList = async () => {
  options.method = "GET";
  const getMoviesFullUrl = PRE_API_URL + getMoviesUrl;
  console.log(options, getMoviesFullUrl);
  fetch(getMoviesFullUrl, options)
    .then((res) => res.json())
    .then((json) => {
      this.setState(() => {
        return { movies: json };
      });
    });
};

// export default getMoviesList;
