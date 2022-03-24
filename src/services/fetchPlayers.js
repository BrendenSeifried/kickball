import { client } from './client';

export async function fetchPlayers() {
  const data = await client.from('players').select('*');
  return data.data;
}