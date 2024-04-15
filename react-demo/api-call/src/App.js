import React, { useRef, useState } from "react";
import "./App.css";
import UseDelete from "./apiMethod/UseDelete";
import UsePatch from "./apiMethod/UsePatch";
import UsePut from "./apiMethod/UsePut";
import useGet from "./apiMethod/useGet";
import usePost from "./apiMethod/usePost";

function App() {
  const [check, setCheck] = useState(false);
  const first = useRef();
  const last = useRef();
  const gender = useRef();

  let { loder, data } = useGet("https://jsonplaceholder.typicode.com/posts");





  function handleFOrmData(event) {
    event.preventDefault();
    console.log(event.value);
    let obj = {
      firstName: first.current.value,
      lastName: last.current.value,
      gender: gender.current.value,
      checked: check,
    };

    console.log(obj);

    let { load, dataRes } = usePost(
      "https://jsonplaceholder.typicode.com/posts",
      {}
    );

    
  }

  return (
    <>
      <form onSubmit={(e) => handleFOrmData(e)}>
        <ul>
          <li>
            <input type="text" placeholder="first name" ref={first}></input>
          </li>
          <li>
            <input type="text" placeholder="last name" ref={last}></input>
          </li>
          <li>
            <select ref={gender}>
              <option>gender</option>
              <option>Male</option>
              <option>female</option>
            </select>
          </li>
          <li>
            <input
              type="checkbox"
              onChange={(e) => setCheck(e.target.checked)}
            ></input>
            i agree terms and condition
          </li>
          <li>
            <button type="submit">Button</button>
          </li>
        </ul>
      </form>

      {<h2>demo</h2>}
    </>
  );
}

export default App;
