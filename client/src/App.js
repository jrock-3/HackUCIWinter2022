import './App.css';
import GameCard from './components/GameCard.js';
import SearchGame from './components/Search_query.js';
import FetchInfo from './FetchInfo.js';


function App() {

  let gamecard_props = [
  {
    title: "Team Fortress 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
    dev_name: "Valve",
    total_players: 73612,
    pos_reviews: 23831,
    neg_reviews: 836,
    news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
  },
  FetchInfo({id:440}),
  ];

  console.log(gamecard_props)
  async function getInfo(_id) {
    return await FetchInfo({id:_id});
  }
  let tf2Info = getInfo(440);
  console.log("tf2 " + tf2Info)
  
  return (
    <div>
      <div>
        <SearchGame />
      </div>
      <div id="game-card-display">
        <GameCard {...tf2Info} />
        {gamecard_props.map((gamecard_prop,index) => (
          <GameCard {...gamecard_prop} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
