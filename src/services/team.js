// import client from './client';
import { client } from './client';

export async function fetchTeams() {
  return client.from('teams').select();
}
  
