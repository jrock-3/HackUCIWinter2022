import { useEffect, useState } from "react";

function Home() {

    const [gameData, setGameData] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(async () => {        
        let baseUrl = "https://eb15-169-234-30-181.ngrok.io"
        //using tf2 as my base id rn. change with another id when finished.
        let gameData_url = baseUrl + "/gameData/440"
        let gamePlayerCount_url = baseUrl + "/gamePlayerCount/440"
        let gameReviews_url = baseUrl + "/gameReviews/440"
        let gameNews_url = baseUrl + "/gameNews/440"
        //Remember. This URL is different everytime ngrok is run
        //and it only stays active for 2 hours!
        //ex) ...ngrok.io/gamePlayerCount/440
        
        //const response = await fetch(url)
        //const data = await response.json()
        //console.log(data.message)

        const gameDataResponse = await fetch(gameData_url)
        const gameDataJSON = await gameDataResponse.json()

        const gamePlayerCountResponse = await fetch(gamePlayerCount_url)
        const gamePlayerCountJSON = await gamePlayerCountResponse.json()

        const gameReviewsResponse = await fetch(gameReviews_url)
        const gameReviewsJSON = await gameReviewsResponse.json()

        const gameNewsResponse = await fetch(gameNews_url)
        const gameNewsJSON = await gameNewsResponse.json()


    }, [])

    

    return (
      <div>
        Hello
        
        {loading || !gameData ? (
            <div>loading...</div> 
        ) : (
            <div>{gameData.name.title}</div>
        )}
      </div>
    );
  }
  
  export default Home;
  