import { useState, useEffect } from "react";

const { REACT_APP_API_KEY, REACT_APP_SEARCH_ENGINE_ID } = process.env;
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}&cx=${REACT_APP_SEARCH_ENGINE_ID}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return data;
};

export default useGoogleSearch;
