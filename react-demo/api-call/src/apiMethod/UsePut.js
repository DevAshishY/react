import { useState, useEffect } from "react";

function UsePut(url,payload,id){
    const[loder,setLoder] = useState(true);
  const [data, setData] = useState([]);


    useEffect(() => {
      fetch(`${url}/${id}`,{
        method: 'PUT',
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
    }, []);

   return {data,loder}
   
}

export default UsePut;