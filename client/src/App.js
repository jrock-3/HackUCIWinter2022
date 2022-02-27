import './App.css';
import GameCard from './components/GameCard.js';
import SearchGame from './components/Search_query.js';
import FetchInfo from './FetchInfo.js';
import { useState,useEffect } from "react";
// import FetchIds from './FetchIds.js';
import gameids from './new_json.json';
// import ReactDOM from 'react-dom';
import games from './components/Search_query.js';


function App() {
  const [gamecard_props, setProps] = useState([])

  async function handleClick(props) {
    const x = await FetchInfo(props)
    setProps(gamecard_props.concat(x))
  }
  
  console.log(gameids['Dyson Sphere Program'])
  console.log(gamecard_props)

  return (
    <div>
      <div>
        <SearchGame />
      </div>
    </div>
  );
}

export default App;
