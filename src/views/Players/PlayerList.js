import { fetchPlayers } from '../../services/fetchPlayers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListOfPlayers() {
  const [player, setPlayer] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayer(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>List of Players:</h1>
      {player.map((data)=>(
        <div key={data.id}>
          <Link to={`/players/${data.id}`}>
            <h2>{data.name}</h2>
          </Link>

        </div>
      ))}
    </div>
  );
}

