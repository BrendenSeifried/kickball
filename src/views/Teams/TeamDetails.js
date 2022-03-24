
import React, { useEffect, useState } from 'react';
// import Team from '../../components/team/Team';
import { fetchTeamById } from '../../services/fetchteam';
import { useParams } from 'react-router-dom';


export default function TeamDetails() {
  const params = useParams();
  const id = params.id;
  const [teamInfo, setTeamInfo] = useState([]);


  useEffect(() => {
    const fetchTeamInfo = async () => {
      const data = await fetchTeamById(id);
      console.log(data);
      setTeamInfo(data);
    };
    fetchTeamInfo();
  }, [id]);

  return (
    <div>
      <h1>Listed Teams:</h1>
             
      <div key={teamInfo.id}>
       
        <h2>{teamInfo.name}</h2>
        <h3>City: {teamInfo.city}, {teamInfo.state}</h3>
        <h3>Team: {teamInfo.name}</h3>
      </div>
      
  
    </div>
  );
}
