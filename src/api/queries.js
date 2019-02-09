import { API_URL } from './constants';
import { headers } from './';

export const search = async (query, type) => {
  const response = await fetch(
    `${API_URL}/v1/search?query=${query}&type=${type}`,
    { headers }
  );
  const json = await response.json();

  return json;
};
