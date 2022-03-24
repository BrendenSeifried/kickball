import { client } from './client';

export async function fetchPlayers() {
  const data = await client.from('players').select('*');
  return data.data;
}

export async function fetchPlayerTeams(id) {
  const dataID = await client.from('players').select(`*, team_id (*)`).match({ id }).single();
  return dataID.data;
}

// export async function fetchPlayersDetails(id) {
//   const data = await client.from('players').select('*').match({ id }).single();
//   console.log(data);
//   return data;
// }