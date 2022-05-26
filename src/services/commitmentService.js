import api from "./api";

export const GET_ALL_COMMITMENTS = () => api.get('/all');

export const POST_NEW_COMMITMENT = (body) => api.post('/add', body);
