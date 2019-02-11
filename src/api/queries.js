import { API_URL } from './constants';

/**
 * Get Search Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.
 *
 * @param {String} query Search query keywords and optional field filters and operators.
 * @param {String} type A comma-separated list of item types to search across. Valid types are: album , artist, playlist, and track.
 * @returns
 */
export const search = async (query, type) => {
  const headers = await getHeaders();
  const response = await fetch(
    `${API_URL}/v1/search?query=${query}&type=${type}`,
    {
      headers,
    }
  );
  const data = await response.json();

  return data;
};

/**
 * Fetches valid access token for the Spotify Web API
 *
 * @returns Access token
 */
async function getToken() {
  try {
    const response = await fetch('http://localhost:8888/token');
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Constructs HTTP Headers for fetching the Sptofiy Web API
 *
 * @returns Headers
 */
async function getHeaders() {
  const { token } = await getToken();

  return {
    Authorization: `Bearer ${token}`,
  };
}
