import './App.css';
import GameCard from './components/GameCard.js';



function App() {
  const gamecard_props = {
    title: "Team Fortress 2",
    img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
    dev_name: "Valve",
    total_players: 73612,
    news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
  }
  return (
    <div>
      <div id="game-card-display">
        <GameCard {...gamecard_props} />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        
      </div>
    </div>
  );
}

export default App;
