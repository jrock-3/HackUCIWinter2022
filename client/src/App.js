import './App.css';
import GameCard from './components/GameCard.js';
import SearchGame from './components/Search_query.js';
import FetchInfo from './FetchInfo.js';


function App() {

  const fetch_props = {
    id: 440
  }
  
  const gamecard_props = [
  {
    title: "Team Fortress 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
    dev_name: "Valve",
    total_players: 73612,
    pos_reviews: 23831,
    neg_reviews: 836,
    news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
  },
  FetchInfo(fetch_props),
  ];

  console.log(gamecard_props)

  // const x = await FetchInfo({id:440});
  return (
    <div>
      <div>
        <SearchGame />
      </div>
      <div id="game-card-display">
        {gamecard_props.map(gamecard_prop => (
          <GameCard {...gamecard_prop} />
        ))}
        </div>
    </div>
  );
}

export default App;
