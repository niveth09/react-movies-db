import React, { useState, useEffect, Component } from "react";
import {
  PRE_API_URL,
  API_KEY,
  getMoviesUrl,
  options,
} from "./string-constants/api-urls";

class APIs extends Component {
  getPosts = () => {
    useEffect(() => {
      const apiUrl = PRE_API_URL + getMoviesUrl;
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
