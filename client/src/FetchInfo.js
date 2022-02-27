async function FetchInfo(props) {

  let output = {}

  let baseUrl = "http://localhost:5000";
  let gameData_url = baseUrl + "/gameInfo/" + props.id;
  let gamePlayerCount_url = baseUrl + "/gamePlayerCount/" + props.id;
  let gameReviews_url = baseUrl + "/gameReviews/" + props.id;
  let gameNews_url = baseUrl + "/gameNews/" + props.id;
  
  const gameDataResponse = await fetch(gameData_url);
  const gameDataJSON = await gameDataResponse.json();
  const info = gameDataJSON[props.id].data;
  // console.log(info);

  const gamePlayerCountResponse = await fetch(gamePlayerCount_url);
  const gamePlayersCountJSON = await gamePlayerCountResponse.json();
  const players = gamePlayersCountJSON.response;
  // console.log(players)

  const gameReviewsResponse = await fetch(gameReviews_url);
  const gameReviewsJSON = await gameReviewsResponse.json();
  const reviews = gameReviewsJSON.query_summary;
  // console.log(reviews)

  const gameNewsResponse = await fetch(gameNews_url);
  const gameNewsJSON = await gameNewsResponse.json();
  const news = gameNewsJSON.appnews.newsitems;
  // console.log(news)

  output.title = info.name;
  output.img = info.header_image;
  output.dev_name = info.developers;

  output.total_players = players.player_count;
  output.pos_reviews = reviews.total_positive;
  output.neg_reviews = reviews.total_negative;
  output.news_link = news[0].url;
  output.id = props.id;

  console.log(output)
  
  return output;
}

export default FetchInfo;
  