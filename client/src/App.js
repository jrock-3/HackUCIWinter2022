import './App.css';
import GameCard from './components/GameCard.js';
import SearchGame from './components/Search_query.js';
import FetchInfo from './FetchInfo.js';
import { useState,useEffect } from "react";
import FetchIds from './FetchIds.js';
// import ReactDOM from 'react-dom';


function App() {
  const [gamecard_props, setProps] = useState([])

  let thing = {
    title: "Team Fortress 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
    dev_name: "Valve",
    total_players: 73612,
    pos_reviews: 23831,
    neg_reviews: 836,
    news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
  }

  // setProps([thing,thing,thing])

  async function handleClick(props) {
    const x = await FetchInfo(props)
    setProps(gamecard_props.concat(x))
  }

  // let x = FetchIds();
  // console.log(x);
  
  console.log(gamecard_props)

  return (
    <div>
      <div>
        <SearchGame />
      </div>
      <div>
        <form>
          <input type="text" id="test" />
        </form>
        <button onClick={() => handleClick({id: document.getElementById('test').value})}>Click</button>
      </div>
      <div id="game-card-display">
        <GameCard {...thing} />
        {gamecard_props.map((gamecard_prop,index) => (
          //add "loading..." here vvv
          <GameCard {...gamecard_prop} key={index} />
        ))}
        </div>
    </div>
  );
}

export default App;
