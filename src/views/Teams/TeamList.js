
import { fetchTeams } from '../../services/fetchteam';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function TeamList() {
  const [team, setTeam] = useState([]);

 
  useEffect(() => {
    const fetchStuff = async () => {
      const stuff = await fetchTeams();
      setTeam(stuff);
    };
    fetchStuff();
  }, []);
      
  

  return (
    <div>
      <h1>Listed Teams:</h1>
      {team.map((data) => ( 
        <div key={data.id}>
          <Link to={`/teams/${data.id}`}>
            <h2>{data.name}</h2>
          </Link>
        </div>
        
      ))}  
    </div>
  );
}
