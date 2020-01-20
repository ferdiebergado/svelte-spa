import client from "../utils/Client.js";

const http = client.getInstance();

const AUTH_API_URL = "https://localhost:8787/auth";

export const register = data => http.post(AUTH_API_URL + "/register", data);

export const login = data => http.post(AUTH_API_URL + "/login", data);