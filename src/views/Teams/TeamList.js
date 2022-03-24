
import { fetchTeams } from '../../services/fetchteam';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

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
    <div>
      <h1>Listed Teams:</h1>
      {team.map((data) => ( 
        <div key={data.id}>
          <Link to={`/fetchteam/${data.id}`}>
            <h2>{data.name}</h2>
            {/* <h3>City: {data.city}, {data.state}</h3>
            <h3>Team: {data.name}</h3> */}
          </Link>
        </div>
        
      ))}  
    </div>
  );
}
