// import client from './client';
import { client } from './client';

export async function fetchTeams() {
  const data = await client.from('teams').select('*');
  return data.data;
}
  
export async function fetchTeamPlayers(id) {
  const dataID = await client.from('teams').select(`*, players (*)`).match({ id }).single();
  return dataID.data;
}

