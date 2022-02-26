import { useEffect } from "react";
import { useState } from "react";

function FetchIds() {

  // const [output, setGameData] = useState({})
  let output = {}


  useEffect(() => {
    let baseUrl = "http://9096-169-234-11-146.ngrok.io";
    let gameIds_url = baseUrl + "/gameId";
    
    async function fetchData() {
      //const response = await fetch(url)
      //const data = await response.json()
      //console.log(data.message)

      const gameIdsResponse = await fetch(gameIds_url);
      const gameIdsJSON = await gameIdsResponse.json();
      const ids = gameIdsJSON.applist;
      console.log(ids);

      output.ids = ids;

      console.log(output)
      // setGameData(output)
    }
    fetchData();

    }, [])
    
    return output;
  }
  
  export default FetchIds;
  