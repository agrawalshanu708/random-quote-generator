import { useState } from "react";
import "./styles.css";

export default function App() {
  const quote = [
    `“My condolences, you're still alive.”`,
    `“The most beautiful smile belongs to those who make others smile”`,
    `“The best sleeping pill is a clear conscience.”`,
    `“World without poetry is like a lover without a rose”`,
    `“Do it or not, but do.”`
  ];
  console.log(quote.length);
  const [random, setRandom] = useState(0);

  return (
    <div className="App">
      <div>{quote[random]}</div>
      <button
        onClick={() => setRandom(Math.floor(Math.random() * quote.length))}
      >
        click
      </button>
    </div>
  );
}
