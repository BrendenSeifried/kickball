
import { fetchTeams } from '../../services/team';
import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [book, setTeam] = useState(null);

 
  useEffect(() => {
    fetchTeams().then(({ data }) => setTeam(data));
  }, []);
      
  if (!book) return <h3>Loading book...</h3>;
  return (
    <div>LandingPage</div>
  );
}

