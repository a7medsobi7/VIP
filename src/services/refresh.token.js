// // refresh-token.js
// import axios from "axios";
// import api from "./api";
// import { authStorage } from "./auth.storage";

// const API_URL = import.meta.env.VITE_API_URL;
// // Configure in .env if different (e.g. VITE_REFRESH_URL=/auth/token/refresh)
// const REFRESH_URL = import.meta.env.VITE_REFRESH_URL || `${API_URL}/auth/refresh`;

// export async function refreshToken(originalRequest) {
//   try {
//     const res = await axios.post(
//       REFRESH_URL.startsWith("http") ? REFRESH_URL : `${API_URL}${REFRESH_URL}`,
//       {},
//       { withCredentials: true },
//     );

//     const newToken = res.data?.accessToken;
//     if (!newToken) throw new Error("No token");

//     authStorage.set(newToken);
//     originalRequest.headers.Authorization = `Bearer ${newToken}`;

//     return api(originalRequest);
//   } catch (err) {
//     authStorage.remove();
//     return Promise.reject(err);
//   }
// }
