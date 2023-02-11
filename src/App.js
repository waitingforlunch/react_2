import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const OnClick = () => setValue((prev) => prev + 1);
  const OnChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when keyword change");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter change");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [keyword, counter]);


  return (
    <div>
      <input
      value={keyword}
      onChange={OnChange}
      type="text"
      placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={OnClick}>Click me</button>
    </div>
  );
}

export default App;
