import './GameCard.css'
import deleteIcon from '../images/deleteIcon.png'
import newsIcon from '../images/newsIcon.png'

function GameCard(props) {
  const x = props.pos_reviews / (props.pos_reviews + props.neg_reviews) * 100
  const percent_pos = Math.round(x * 100) / 100;
  const percent_neg = Math.round((100 - percent_pos) * 100) / 100
  return (
    <div className="game-card">
      <img src={props.img} className="game-img" alt={"Image of " + props.title} />
      <img src = {deleteIcon} id="delete-button" onClick={props.onClick} className={props.title} alt="Delete Button" />
      <a href={props.news_link} target="_blank"><img src={newsIcon} id="news-button" alt="News Button" /></a>
      <div className="bottom-card">
        <div className="game-name">{props.title}</div>
        <div className="dev-name">Developer: {props.dev_name}</div>
        <div className="game-player-count">Online Players: {props.total_players} </div>
        <div className="rating-box">
          <div className="rating-box1" style={{width: percent_pos + "%"}}></div>
          <div className="rating-box2" style={{width: percent_neg + '%'}}></div>
        </div>

        <span class="left">Positive: {percent_pos+"%"}</span><span class="right">Negative: {percent_neg+"%"}</span>​
      </div>
    </div>
  );
}

export default GameCard;