
import React, { useEffect, useState } from 'react';
import { fetchPlayersDetails, fetchPlayerTeams } from '../../services/fetchPlayers';
import { useParams } from 'react-router-dom';


export default function PlayerDetails() {
  const params = useParams();
  const id = params.id;
  console.log(params);
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    const fetchPlayerInfo = async () => {
      const data = await fetchPlayerTeams(id);
      setPlayerInfo(data);
    };
    fetchPlayerInfo();
  }, [id]);

  if (!playerInfo) return <h1>...Finding Player Stats</h1>;

  return (
    <div>
      <h1>Player Information:</h1>
      <div key={playerInfo.id}>
        <h2>{playerInfo.name}</h2>
        <h2>{playerInfo.position}</h2>


      </div>
    </div>
  );
}
