import React, { useState } from "react";
import Fuse from 'fuse.js';
import "./Search_query.css";


//SET THIS TO FETCHID OUTPUT
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
        {console.log(event.target.id)}
        if (!userGames.includes(event.target.id)){
            setGames([...userGames,event.target.id])
        }
        {console.log(userGames)}
    }

    function gameDropdown(){
        return <ul  className="dropdown-content">
            {possibleGames.map((posGame)=>{
            if (posGame.item!="No game found"){
                return <li key= {posGame.item} id={posGame.item} onClick={handleAdd}>{posGame.item}</li>
            }else{
                    return <li key={posGame.item}>No game Found</li>
            }}) }</ul>
    }


    return <div className="dropdown">
        <h1>Search for games</h1>
        
        <form onSubmit={handleSubmit}>
            <label>Enter favorite Games</label>
            <div className="dropdown">
            <input type='text' value={games}  placeholder ='Search..' onChange={handleGame} id="my-input"></input>
            {gameDropdown()}
            </div>
            
        </form>
        
        <div className='games'>
            {console.log(userGames)}
            {userGames.map((usGame)=>
                <p key={usGame}>{usGame}</p>
            )}
        </div>

    </div>
}

export default SearchGame;