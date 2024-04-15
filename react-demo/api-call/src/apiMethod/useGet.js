import { useState, useEffect } from "react";

function useGet(url){
    const[loder,setLoder] = useState(true);
  const [data, setData] = useState([]);


    useEffect(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setLoder(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [url]);

   return {data,loder}
   
}

export default useGet;