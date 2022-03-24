// import client from './client';
import { client } from './client';

export async function fetchTeams() {
  const data = await client.from('teams').select('*');
  return data.data;
}
  
export async function fetchTeamPlayers(id) {
  return client.from('teams').select(`*, players (*)`).match({ id }).single();
}

export async function fetchTeamById(id) {
  
  const dataId = await client.from('teams').select(`*`).match({ id }).single();
  console.log(dataId);
  return dataId.data;
}

//How will I render the information for players to the teamsDetails page, hint . notation 