import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import "./SearchBar.css";
import GameCard from './GameCard.js';
import gameids from '../new_json.json';
import FetchInfo from '../FetchInfo.js';

const games_list= Object.keys(gameids);
console.log(gameids)
const options={distance:50,findAllMatches:true,limit:3};
const fuse= new Fuse(games_list,options)

function SearchBar(props){
    const [games, setSearch]=useState('')
    const [possibleGames, setGamelist]=useState([])
    const [userGames, setGames]=useState([])

    const [myInput, setMyInput] = useState('');
	const [myAPIResult, setMyAPIResult] = useState([]);

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


    const handleGame = async (event)=>{
        setSearch(event.target.value)
    }
    const handleSubmit = (event) => {
        // console.log('finding')
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

    const handleAdd= async (event) => {
        event.preventDefault()
        console.log(userGames)
        // console.log(event.target.id + " " + gameids[event.target.id])
        if (!userGames.includes(event.target.id)){
            setGames([...userGames,gameids[event.target.id]])
            setMyInput(gameids[event.target.id]);
        }
        setGamelist([])
        setSearch('')
        // console.log(userGames)
    }

    const handleRemove= (event)=>{
        console.log(event.target.className)
        console.log(gameids[event.target.className])
        setGames(userGames.filter((element)=>{
            console.log(element)
            return element !== gameids[event.target.className]}))
        setMyAPIResult(myAPIResult.filter((element)=>{return event.target.className !==element.title }))
        console.log(userGames)
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

                <div className="decorations">
                    <img className="decorative-image" src = "https://cdn.mos.cms.futurecdn.net/8gWTFzyHLQXnTGiVhRLeea.jpg" ></img>
                    <img className="decorative-image" src = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11170746/ada472b27af1bb9e90ec8937b3c5b3ddf6209cb4_400x225.png" ></img>
                    <img className="decorative-image" src = "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1635269541" ></img>
                    <img className="decorative-image" src = "https://progameguides.com/wp-content/uploads/2021/09/Featured-Best-Factions-for-Beginners-in-Warhammer-Total-War-2.jpg" ></img>
                    <img className="decorative-image" src =  "https://cdn.entertainment-focus.com/wp-content/uploads/2021/02/08100108/key_visual-1024x576.jpg"></img>
                    <img className="decorative-image" src =  "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/h/hollow-knight-switch/hero"></img>
                    <img className="decorative-image" src =  "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2021/07/skyrim-se-hero-pic.jpg"></img>
                    <img className="decorative-image" src =  "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/09/fallout-new-vegas-hero.jpg"></img>
                    <img className="decorative-image" src =  "https://cdn.vox-cdn.com/thumbor/6vx-a1K3EgFvma0NULdvuL3NR9U=/0x0:1280x720/1200x800/filters:focal(500x303:704x507)/cdn.vox-cdn.com/uploads/chorus_image/image/65311868/Untitled_Goose_Game_the_garden.0.jpg"></img>
                    <img className="decorative-image" src =  "https://images.gnwcdn.com/2018/usgamer/celeste19.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/how-celeste-was-designed-with-speedrunning-in-mind.jpg"></img>

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

                
                <div id="game-card-display">
                    {myAPIResult.map((gamecard_prop,index) => (
                    <GameCard {...gamecard_prop} key={index} handleRemove={handleRemove}/>
                    ))}
                </div>
            </div>
}

export default SearchBar;