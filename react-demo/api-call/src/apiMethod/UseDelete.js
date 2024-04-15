import { useState, useEffect } from "react";

function UseDelete(url,id){
    const[loder,setLoder] = useState(true);
  const [data, setData] = useState([]);


    useEffect(() => {
      fetch(`${url}/${id}`,{
        method: 'Delete',
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

export default UseDelete;