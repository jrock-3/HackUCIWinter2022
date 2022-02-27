import React, { useState } from "react";
import Fuse from 'fuse.js';
import "./Search_query.css";
// import GameCard from './GameCard.js';
import gameids from '../new_json.json';


const games_list= Object.keys(gameids);//["counter strike:global offensive","CS", "a"];
const options={};
const fuse= new Fuse(games_list,options)

let choices = []

function SearchGame(props){
    const [games, setSearch]=useState('')
    const [possibleGames, setGamelist]=useState([])
    const [userGames, setGames]=useState([])

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

    const handleAdd=(event)=>{
        event.preventDefault()
        // console.log(event.target.id + " " + gameids[event.target.id])
        if (!userGames.includes(event.target.id)){
            setGames([...userGames,gameids[event.target.id]])
        }
        choices = userGames;
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
        
    </div>
}

export let games = choices;
export default SearchGame;