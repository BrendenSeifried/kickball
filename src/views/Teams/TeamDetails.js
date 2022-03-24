
import React, { useEffect, useState } from 'react';
import { fetchTeamPlayers } from '../../services/fetchteam';
import { useParams } from 'react-router-dom';


export default function TeamDetails() {
  const params = useParams();
  const id = params.id;
  const [teamInfo, setTeamInfo] = useState(null);


  useEffect(() => {
    const fetchTeamInfo = async () => {
      const data = await fetchTeamPlayers(id);
      setTeamInfo(data);
    };
    fetchTeamInfo();
  }, [id]);

  if (!teamInfo) return <div>...Loading</div>;

  return (
    <div>
      <h1>Listed Teams:</h1>
             
      <div key={teamInfo.id}>
       
        <h2>{teamInfo.name}</h2>
        <h3>City: {teamInfo.city}, {teamInfo.state}</h3>
        <h3>Team: {teamInfo.name}</h3>

        {teamInfo.players.map((players)=>(
          <p key={players.id}>{players.name}
          Playing as {players.position} </p>
        ))}
        
      </div>

      
      
  
    </div>
  );
}
