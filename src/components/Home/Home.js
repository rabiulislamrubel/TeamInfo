import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';


const Home = () => {
    const [teams,setTeam] = useState([])

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga')
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[])
    return (
        <div className='main-container'>
            <div className="header">
                <div className="inner-header">
                    <h1>Team Info</h1>
                </div>
            </div>
            <div className="body">
                {
                    teams.map(team => <Teams team ={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;