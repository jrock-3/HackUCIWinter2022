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

  // let x = FetchIds();
  // console.log(x);
  
  console.log(gamecard_props)

  return (
    <div>
      <div>
        <SearchGame />
      </div>
      <div>
        <form action={() => setProps(gamecard_props.concat({}))}>
          <input type="text"></input>
        </form>
        <button onClick={() => setProps(gamecard_props)}>Click</button>
        {/* {() => setProps(gamecard_props.concat({}))} */}
      </div>
      <div id="game-card-display">
        {gamecard_props.map((gamecard_prop,index) => (
          <GameCard {...gamecard_prop} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
