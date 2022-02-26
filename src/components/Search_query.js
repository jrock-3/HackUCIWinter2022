import React, { useState } from "react";
import Fuse from 'fuse.js';
import "./Search_query.css";

const games_list=["counter strike:global offensive"];
const options={};
const fuse= new Fuse(games_list,options)

function SearchGame(props){
    const [games, setSearch]=useState('')
    const [possibleGames, setGamelist]=useState([])
    const [userGames, setGames]=useState([])

    const handleGame=(event)=>{
        setSearch(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const similarGames= fuse.search(games,options)
        console.log(similarGames)
        if (similarGames.length!=0){
            setGamelist(similarGames)
            
        }else{ 
            setGamelist([{item:"No game found"}])
        }
        setSearch('')
        console.log(possibleGames)

    }

    const handleAdd=(event)=>{
        event.preventDefault()
        if (!userGames.includes(event.target.value)){
            setGames(event.target.value)
        }
    }

    return <div>
        <h1>Search for games</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter favorite Games</label>
            <div className="dropdown">
                <input type='text' value={games}  placeholder ='Search..' onChange={handleGame}></input>
                <button type='submit'>Search Game</button> 
            </div>
            
        </form>
        <div className="dropdown-content">
                {possibleGames.map((usGame)=>
                <button key= {usGame} value={usGame} onClick={handleAdd}>{usGame.item}</button>
            )}   
        </div>
        <div className='games'>
            {userGames.map((usGame)=>
                <p key={usGame}>{usGame.item}</p>
            )}
        </div>

    </div>
}

export default SearchGame;