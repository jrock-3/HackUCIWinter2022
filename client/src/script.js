let serverUrl = 'https://194d-169-234-30-181.ngrok.io';

function callBackend() {
    fetch(serverUrl)
        .then(res => res.json())
        .then(data => {
            document.getElementById('display').innerHTML = data.message
            console.log("wowza!")
        })
}
