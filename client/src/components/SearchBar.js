import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import "./SearchBar.css";
import GameCard from './GameCard.js';
import gameids from '../new_json.json';
import FetchInfo from '../FetchInfo.js';
// import date from 'date';


const games_list= Object.keys(gameids);
const options={distance:50,findAllMatches:true,limit:5};
const fuse= new Fuse(games_list,options)

function SearchBar(props){
    const [games, setSearch]=useState('')
    const [possibleGames, setGamelist]=useState([])
    const [userGames, setGames]=useState([])

    const [myInput, setMyInput] = useState('');
	const [myAPIResult, setMyAPIResult] = useState([]);
    // const [currTime, setCurrTime] = useState(Date())

    useEffect(() => {
		const fetchData = async () => {
			// get data here
			const _info = await FetchInfo({id:myInput});

		    // set state with the result
		    setMyAPIResult([...myAPIResult,_info]);
		}
	    // call the function, catch errors
        if(myInput !== '') {
            fetchData()
            .catch(console.error);
        }
	}, [myInput]);


    const handleGame= async (event)=>{
        setSearch(event.target.value)
        await handleInput(event)
    }
    const handleInput = (event) => {
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
    }
    const handleSubmit=(event)=>{
        handleInput(event)
        setSearch('')
    }

    const handleAdd= async (event) => {
        event.preventDefault()
        // console.log(event.target.id + " " + gameids[event.target.id])
        if (!userGames.includes(event.target.id)){
            setGames([...userGames,gameids[event.target.id]])
            setMyInput(gameids[event.target.id]);
        }
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
    return <div className = "website">
                <div className="title-and-icon">
                    <img id="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png" ></img>
                    <h2 id="title">Steam Game Compiler</h2>
                </div>
                <div className="search-box">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div align='center' className="dropdown">
                            <i className="material-icons">search</i>
                            <input type='text' value={games}  placeholder ='Search..' onChange={handleGame} id="my-input"></input> 
                        </div>
                    </form>

                    <div>
                        {gameDropdown()}
                    </div>
                </div>

                <div className="decorations">
                    <img className="decorative-image" src = "https://cdn.mos.cms.futurecdn.net/8gWTFzyHLQXnTGiVhRLeea.jpg" ></img>
                    <img className="decorative-image" src = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11170746/ada472b27af1bb9e90ec8937b3c5b3ddf6209cb4_400x225.png" ></img>
                    <img className="decorative-image" src = "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1635269541" ></img>
                    <img className="decorative-image" src = "https://progameguides.com/wp-content/uploads/2021/09/Featured-Best-Factions-for-Beginners-in-Warhammer-Total-War-2.jpg" ></img>
                </div>
                
                <div id="game-card-display">
                    {myAPIResult.map((gamecard_prop,index) => (
                    <GameCard {...gamecard_prop} key={index} />
                    ))}
                </div>
            </div>
}

export default SearchBar;