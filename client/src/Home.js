import { useEffect, useState } from "react";
import "./script.js"

function Home() {

    const [gameData, setGameData] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(async () => {        
        let baseUrl = "https://1c23-169-234-30-181.ngrok.io"
        //using tf2 as my base id rn. change with another id when finished.
        let gameData_url = baseUrl + "/gameData/440"
        let gamePlayerCount_url = baseUrl + "/gamePlayerCount/440"
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
  