import './GameCard.css'

function GameCard(props) {
  const x = props.pos_reviews / (props.pos_reviews + props.neg_reviews) * 100
  const percent_pos = Math.round(x * 100) / 100;
  const percent_neg = Math.round((100 - percent_pos) * 100) / 100
  // console.log(percent_neg + " " + percent_pos)
  return (
    <div className="game-card">
      <div className="game-name">{props.title}</div>
      <img src={props.img} className="game-img" alt={"Image of " + props.title} />
      <div className="dev-name">Developer: {props.dev_name}</div>
      <div className="game-player-count">Current Number of Players: {props.total_players} </div>
      {/* <div id="game-ratings">
        put ratings here
      </div> */}
      <div className="rating-box">
        <p>Ratings:</p>
        <div className="rating-box1" style={{width: percent_pos + "%"}}>{percent_pos+"%"}</div>
        <div className="rating-box2" style={{width: percent_neg + '%'}}>{percent_neg+"%"}</div>
      </div>
      <a href={props.news_link}><p className="game-news-link">News</p></a>
    </div>
  );
}

export default GameCard;