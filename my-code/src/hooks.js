import { useState, useEffect } from "react";


export function useFetchAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    let res = await fetch(url);
    let json = res.json();
    setData(json);
    setLoading(false);
    console.log(json);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data,loading];

}