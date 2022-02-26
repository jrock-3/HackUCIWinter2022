import './App.css';
import GameCard from './components/GameCard.js';
import SearchGame from './components/Search_query.js';
import FetchInfo from './FetchInfo.js';
import { useState } from "react";
import ReactDOM from "react-dom";


function App() {
  const [gamecard_props, setProps] = useState([])

  gamecard_props.push(
  {
    title: "Team Fortress 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
    dev_name: "Valve",
    total_players: 73612,
    pos_reviews: 23831,
    neg_reviews: 836,
    news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
  },
  );

  // console.log(gamecard_props)
  async function getInfo(_id) {
    return await FetchInfo({id:_id});
  }
  getInfo(105600).then((game_info) => {
    gamecard_props.push(game_info);
    // ReactDOM.render(<GameCard {...game_info} />, document.getElementById('game-card-display'));


    // setProps(gamecard_props)
    // console.log(game_info)
    console.log(gamecard_props)
  })
  console.log(gamecard_props)
  
  return (
    <div>
      <div>
        <SearchGame />
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
