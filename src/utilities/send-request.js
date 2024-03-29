import { getToken } from "./users-service";
export default async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
    const res = await fetch(`http://localhost:3001${url}`, options);
    if (res.ok) {
      return res.json();
    } else {
      const errorResponse = await res.json();
      throw new Error(`Request failed with status ${res.status}: ${errorResponse.message}`);
  }
  }