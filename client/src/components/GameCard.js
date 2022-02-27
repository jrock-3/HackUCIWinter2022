import './GameCard.css'
import newsIcon from '../images/newsIcon.png'
import deleteIcon from '../images/deleteIcon.png'

function GameCard(props) {
  const x = props.pos_reviews / (props.pos_reviews + props.neg_reviews) * 100
  const percent_pos = Math.round(x * 100) / 100;
  const percent_neg = Math.round((100 - percent_pos) * 100) / 100
  // console.log(percent_neg + " " + percent_pos)
  return (
    <div className="game-card">
      <img src={props.img} className="game-img" alt={"Image of " + props.title} />
      <img src = {newsIcon} id="news-button" />
      <img src = {deleteIcon} id="delete-button" onClick={props.onClick} className={props.title}/>
      <div className="bottom-card">
        <div className="game-name">{props.title}</div>
        <div className="dev-name">Developer: {props.dev_name}</div>
        <div className="game-player-count">Online Players: {props.total_players} </div>
        {/* <div id="game-ratings">
          put ratings here
        </div> */}
        <div className="rating-box">
          <div className="rating-box1" style={{width: percent_pos + "%"}}></div>
          <div className="rating-box2" style={{width: percent_neg + '%'}}></div>
        </div>
        <span class="right">Negative: {percent_neg+"%"}</span><span class="left">Positive: {percent_pos+"%"}</span>​
        
      </div>
      {/* <a href={props.news_link}><p className="game-news-link">News</p></a> */}
    </div>
  );
}

export default GameCard;