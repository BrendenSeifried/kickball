
import React, { useEffect, useState } from 'react';
import { fetchTeamById, fetchTeamPlayers } from '../../services/fetchteam';
import { useParams } from 'react-router-dom';


export default function TeamDetails() {
  const params = useParams();
  const id = params.id;
  const [teamInfo, setTeamInfo] = useState({});
  const [teamPlayers, setTeamPlayers] = useState({ players: [] });


  useEffect(() => {
    const fetchTeamInfo = async () => {
      const data = await fetchTeamById(id);
      console.log(data);
      setTeamInfo(data);
    };
    fetchTeamInfo();
  }, [id]);

  useEffect(()=>{
    const fetchPlayers = async () => {
      const playerData = await fetchTeamPlayers(id);
      console.log(playerData);
      setTeamPlayers();
    };
    fetchPlayers();
  }, [id]);
 

  return (
    <div>
      <h1>Listed Teams:</h1>
             
      <div key={teamInfo.id}>
       
        <h2>{teamInfo.name}</h2>
        <h3>City: {teamInfo.city}, {teamInfo.state}</h3>
        <h3>Team: {teamInfo.name}</h3>
        {/* <p key={players.id}></p> */}
        
      </div>

      
      
  
    </div>
  );
}
