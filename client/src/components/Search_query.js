import React, { useState } from "react";
import Fuse from 'fuse.js';
import "./Search_query.css";

const games_list=["counter strike:global offensive","CS"];
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
        //SsetGamelist([])
        event.preventDefault()
        const similarGames= fuse.search(games,options)
        //console.log(similarGames)
        if (similarGames.length!=0){
            //console.log(similarGames)
            setGamelist(similarGames)
        }else{ 
            setGamelist([{item:"No game found"}])
        }
        console.log(possibleGames)
        setSearch('')
    }

    const handleAdd=(event)=>{
        event.preventDefault()
        {console.log(event.target.value)}
        if (!userGames.includes(event.target.value)){
            setGames(userGames.concat(event.target.value))
        }
        {console.log(userGames)}
    }

    return <div className="dropdown">
        <h1>Search for games</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter favorite Games</label>
            <input type='text' value={games}  placeholder ='Search..' onChange={handleGame}></input>
            <button type='submit'>Search Game</button> 
        </form>
        <div className="dropdown-content">
            {possibleGames.map((posGame)=>
                {if(posGame.item!="No game found"){
                    return <button key= {posGame.item} value={posGame.item} onClick={handleAdd}>{posGame.item}</button>
                }else{
                     return <p key={posGame.item}>No game Found</p>
                }})}   
        </div>
        <div className='games'>
            {console.log(userGames)}
            {userGames.map((usGame)=>
                <p key={usGame}>{usGame}</p>
            )}
        </div>

    </div>
}

export default SearchGame;