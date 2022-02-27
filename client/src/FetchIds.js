function FetchIds() {
    let output = {}

    let baseUrl = "http://24be-169-234-11-146.ngrok.io";
    let gameIds_url = baseUrl + "/gameId";

    async function fetchData() {
        const gameIdsResponse = await fetch(gameIds_url);
        const gameIdsJSON = await gameIdsResponse.json();
        const ids = gameIdsJSON.applist;
        console.log(ids);

        output.ids = ids;

        console.log(output)
    }
    fetchData();

    return output;
}

export default FetchIds;
  