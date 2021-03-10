import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Team.css';
import conditionalMalePhoto from '../../Photo/male.png';
import conditionalFemalePhoto from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarker, faMars } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../Photo/Facebook.png';
import Twitter from '../../Photo/Twitter.png';
import youtube from '../../Photo/YouTube.png';

const Team = () => {
    const {teamId} = useParams()
    const [teamInfo, setTeamInfo] = useState({})
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams[0]))
    },[teamId])
    console.log(teamInfo);
    const {
        strTeam,
        strTeamBadge,
        intFormedYear,
        strCountry,
        strGender,
        strSport,
        strDescriptionEN,
        strFacebook,
        strInstagram,
        strYoutube,
        strStadiumDescription
    }= teamInfo;

    let image;
    if(strGender === 'Male'){
        image = conditionalMalePhoto
    }else(
        image = conditionalFemalePhoto
    );

    return (
        <div className='main-team-info'>
            <div className="team-header">
                <div className="logo">
                    <img src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="team-info-body">
                <div className="team-information">
                    <div className="left-side">
                        <h1>{strTeam}</h1>
                        <p><FontAwesomeIcon icon={faMapMarker}/> Founded: {intFormedYear}</p>
                        <p> <FontAwesomeIcon icon ={faFlag}/> Country: {strCountry}</p>
                        <p> <FontAwesomeIcon icon={faFutbol}/> Sports Type: {strSport}</p>
                        <p> <FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                    </div>
                    <div className="right-side">
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className="team-history">
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <br/>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="team-social-link">
                    <div className="inner-link">
                        <span><a href={strFacebook} > <img src={facebook} alt=""/> </a></span>
                        <span><a href={strInstagram}> <img src={Twitter} alt=""/> </a></span>
                        <span><a href={strYoutube}> <img src={youtube} alt=""/> </a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;