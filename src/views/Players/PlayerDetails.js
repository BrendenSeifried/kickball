
import React, { useEffect, useState } from 'react';
import { fetchPlayerTeams } from '../../services/fetchPlayers';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
        <h2>Position Played: {playerInfo.position}</h2>
        <Link to={`/teams/${playerInfo.team_id}`}>
          <h2>Playing for: {playerInfo.teams.name}</h2>
        </Link>

      </div>
    </div>
  );
}
