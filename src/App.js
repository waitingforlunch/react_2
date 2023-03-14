import { number } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [price, setPrice] = useState(0);

  const onChange = (event) => {
    setInput(event.target.value);
    setResult(event.target.value * price);
  }
  
  const onChange2 = (event) => {
    setPrice(event.target.value);
  }

  useEffect (() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then ((response) => response.json())
    .then ((json) =>
    setCoins(json));
    setLoading(false);
  }, []);


  return (
    <div>
      <h1>The Coins! </h1>
      {loading ? <strong>Loading...</strong> : 
      <select onChange={onChange2}>
        {coins.map((coin) => 
        <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
      </select>
      }
      <h2>Enter amount</h2>
      <div>
        <input type="number" placeholder="how many?" value={input} onChange={onChange}/>
      </div>
      <h2>you need {result}$</h2>
    </div>
  );
}

export default App;
