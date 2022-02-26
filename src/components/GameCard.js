import './GameCard.css'

function GameCard(props) {
  return (
    <div id="game-card">
      <div id="game-name">{props.title}</div>
      <img src={props.img} id="game-img" alt={"Image of " + props.title} />
      <div id="dev-name">Developer: {props.dev_name}</div>
      <div id="game-player-count">Current Number of Players: {props.total_players} </div>
      {/* <div id="game-ratings">
        put ratings here
      </div> */}
      <div id="rating-box">
        <p>Ratings:</p>
        <div id="rating-box1" style={{width: props.percent_pos + "%"}}>{props.percent_pos+"%"}</div>
        <div id="rating-box2" style={{width: 100-props.percent_pos + '%'}}>{props.percent_pos+"%"}</div>
      </div>
      <a href={props.news_link}><p id="game-news-link">News</p></a>
    </div>
  );
}

export default GameCard;