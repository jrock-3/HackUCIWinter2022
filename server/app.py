from flask import Flask, jsonify, request
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app)

# Access this endpoint through: http://localhost:5000/
@app.route('/')
def index():
    return jsonify({'message': 'Hey, everything works!!'})

# Access this endpoint through: http://localhost:5000/gameInfo/<id>
@app.route('/gameInfo/<id>')
def gameInfo(id):
    url = "https://store.steampowered.com/api/appdetails?appids=" + id

    response = requests.request(
        "GET", url)

    return jsonify(response.json())

# Access this endpoint through: http://localhost:5000/gameInfo/<id>
@app.route('/gamePlayerCount/<id>')
def gamePlayerCount(id):
    url = "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?format=json&appid=" + id

    response = requests.request(
        "GET", url)

    return jsonify(response.json())