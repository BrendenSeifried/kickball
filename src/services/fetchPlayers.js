import { client } from './client';

export async function fetchPlayers() {
  const data = await client.from('players').select('*');
  return data.data;
}

export async function fetchPlayerTeams(id) {
  const dataID = await client.from('players').select(`*, teams (*)`).match({ id }).single();
  return dataID.data;
}
