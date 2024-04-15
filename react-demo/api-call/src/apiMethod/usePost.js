import { useState, useEffect } from "react";

function usePost(url,payload){
    const[loder,setLoder] = useState(true);
  const [data, setData] = useState([]);


    useEffect(() => {
      fetch(url,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      })
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

export default usePost;