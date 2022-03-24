
import { fetchTeams } from '../../services/fetchteam';
import React, { useEffect, useState } from 'react';

export default function TeamList() {
  const [team, setTeam] = useState([]);

 
  useEffect(() => {
    const fetchStuff = async () => {
      const stuff = await fetchTeams();
      console.log(stuff);
      setTeam(stuff);
    };
    fetchStuff();
  }, []);
      
  

  return (
    <div>Landing
      
      {team.map((data) => ( 
        <div key={data.id}>
          <h1>{data.name}</h1>
          <h3>City:{data.city}, {data.state}</h3>
          <h3>Team:{data.name}</h3>
        </div>
        
      ))}  
    </div>
  );
}
