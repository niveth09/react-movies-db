import React, { useState, useEffect, Component } from "react";

class APIs extends Component {
  APP_KEY = "1f4530e22cc8d7f3e0bdd2f0fde50d87";
  APP_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjQ1MzBlMjJjYzhkN2YzZTBiZGQyZjBmZGU1MGQ4NyIsInN1YiI6IjY0ZjAyNDFkM2E5OTM3MDBlMmY3NzU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9--_LBM-h3yqjp0yjyJh2l02g_yua2Vnh4YCYOMNlJo";

  getPosts = () => {
    useEffect(() => {
      const apiUrl =
        "https://api.themoviedb.org/3/genre/movie/list?language=en&app_key=${APP_KEY}";
      const [data, setData] = useState(null);
      fetch(apiUrl).then((res) => {
        console.log(data);
        return res.json();
      });
      setData(data);
    });
  };
}

export default APIs;
