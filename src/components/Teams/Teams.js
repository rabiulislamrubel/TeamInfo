import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    // console.log(props.team)
    const {strTeamBadge,strTeam,strSport,idTeam} = props.team;
    return (
        <div className='single-team'>
            <div className="photo">
                <img src={strTeamBadge} alt=""/>
            </div>
            <div className="short-info">
                <h1>{strTeam}</h1>
                <p>Sports type: {strSport}</p>
                <Link to={`/team/${idTeam}`}>
                    <button className='btn'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </div>
    );
};

export default Teams;