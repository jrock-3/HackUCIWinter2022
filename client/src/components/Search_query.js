import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import "./Search_query.css";
import GameCard from './GameCard.js';
import gameids from '../new_json.json';
import FetchInfo from '../FetchInfo.js';


const games_list= Object.keys(gameids);//["counter strike:global offensive","CS", "a"];
const options={distance:50,findAllMatches:true,limit:5};
const fuse= new Fuse(games_list,options)

let choices = []

function SearchGame(props){
    const [games, setSearch]=useState('')
    const [possibleGames, setGamelist]=useState([])
    const [userGames, setGames]=useState([])

    //!!!!!!!!!!!!!!!!!!!!!

    const [myInput, setMyInput] = useState('');
	const [myAPIResult, setMyAPIResult] = useState([]);

    useEffect(() => {
		const fetchData = async () => {
			// get data here
			const _info = await FetchInfo({id:myInput});
            // console.log(_info)
            // const _json = await _info.json();

		    // set state with the result
		    setMyAPIResult([...myAPIResult,_info]);
		}
	    // call the function, catch errors
        if(myInput !== '') {
            fetchData()
            .catch(console.error);
        }
	}, [myInput]);

    //!!!!!!!!!!!!!!!!!!!!!

    let thing = {
        title: "Team Fortress 2",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1592263852",
        dev_name: "Valve",
        total_players: 73612,
        pos_reviews: 23831,
        neg_reviews: 836,
        // news_link: "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/4235075565596422445",
    }


    const handleGame=(event)=>{
        setSearch(event.target.value)
    }
    const handleSubmit=(event)=>{
        //setGamelist([])
        event.preventDefault()
        const similarGames= fuse.search(games,options)
        //console.log(similarGames)
        if (similarGames.length!=0){
            //console.log(similarGames)
            setGamelist(similarGames)
        }else{ 
            setGamelist([{item:"No game found"}])
        }
        // console.log(possibleGames)
        setSearch('')
    }

    const handleAdd= async (event) => {
        event.preventDefault()
        // console.log(event.target.id + " " + gameids[event.target.id])
        if (!userGames.includes(event.target.id)){
            setGames([...userGames,gameids[event.target.id]])
            setMyInput(gameids[event.target.id]);
        }
        choices = userGames;
        setGamelist([])
        // console.log(userGames)
    }

     function gameDropdown(){
        return <ul align='center'  className="dropdown-content">
            {possibleGames.map((posGame)=>{
            if (posGame.item!="No game found"){
                return <li key= {posGame.item} id={posGame.item} onClick={handleAdd}>{posGame.item}</li>
            }else{
                    return <li key={posGame.item}>No game Found</li>
            }}) }</ul>
    }

    console.log(myAPIResult)
    return <div className="search-box">
        <h1>Search for games</h1>
        
        <form onSubmit={handleSubmit}>
            <div align='center' className="dropdown">
                <i className="material-icons">search</i>
                <input type='text' value={games}  placeholder ='Search..' onChange={handleGame} id="my-input"></input> 
            </div>
        </form>
        {gameDropdown()}
        
        {/* <div className='games'>
            {console.log(userGames)}
            {userGames.map((usGame)=>
                // <GameCard {...} />
                <p key={usGame}>{usGame}</p>
            )}
        </div> */}
        <div id="game-card-display">
        {/* <GameCard {...thing} /> */}
            {myAPIResult.map((gamecard_prop,index) => (
            //add "loading..." here vvv
            <GameCard {...gamecard_prop} key={index} />
            ))}
        </div>
    </div>
}

export let games = choices;
export default SearchGame;

/*
import React, { useState, useEffect } from 'react';

const Comp = () => {
	const [myInput, setMyInput] = useState('');
	const [myAPIResult, setMyAPIResult] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			// get data here
			const json = await response.json();

		    // set state with the result
		    setMyAPIResult(json);
		}
	  // call the function, catch errors
	  fetchData()
	    .catch(console.error);
	}, [myInput]);

	const handleClick = () => {
		setMyInput(// pass in data here);
	}

	return {
		<button onClick={handleClick}> my button </button>
	}
}
*/