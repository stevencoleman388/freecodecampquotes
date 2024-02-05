import { useState } from 'react'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteLeft,FaTumblr} from"react-icons/fa";

import './App.css'
interface Quote{
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote=>{
  return quotes[Math.floor(Math.random()* quotes.length)]
}
const getRandomColor=():string=>{
const red =Math.floor(Math.random()*200);
const blue =Math.floor(Math.random()*200);
const green =Math.floor(Math.random()*200);
return `rgb(${red},${blue},${green})`;
}
const transition ="all 1.2s";
function App() {
  const [quote, setQuote] =      useState<Quote>(getRandomQuote());
  const [randomColor,setRandomColor]=  useState<string>(getRandomColor())
  const newQuote=()=>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor())
}
  return (
  <div className='background' style={{backgroundColor: randomColor,transition}}>
    <div id="quote-box">
      <div className="quote-content" style={{color:randomColor,transition}}>
        <FaQuoteLeft size="30" style={{marginRight:"10px"}} />
        <h2 id="text">
          {quote.quote}
        </h2>
       
        <h4 id="author">- {quote.author}</h4>
      </div>
       <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
        id="tweet-quote"
        style={{backgroundColor:randomColor,transition,
      marginRight:"10px"}}
        ><FaTwitter color='white' size="18"/></a>
       
       
        <a href={`https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com=${quote.quote}`} id='tumblr-quote' style={{backgroundColor:randomColor,transition,marginRight:"15px"}}><FaTumblr color='white'  size="18"/></a>
        <button id='new-quote' onClick={newQuote} style={{backgroundColor:randomColor,transition}}>
          New quote
        </button>
       </div>
    </div>
  </div>
  );
}

export default App;
