import './GameCard.css'

function GameCard(props) {
  return (
    <div id="game-card">
      <div id="game-name">{props.title}</div>
      <img src={props.img} id="game-img" />
      <div id="dev-name">Developer: {props.dev_name}</div>
      <div id="game-player-count">Current Number of Players: {props.total_players} </div>
      <div id="game-ratings">
        put ratings here
      </div>
      <a href={props.news_link} id="game-news-link">News</a>
    </div>
  );
}

export default GameCard;