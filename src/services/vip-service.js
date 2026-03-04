// vip-service.js
import api from "./api";

// GET VIP TYPES
export const getVipTypes = async () => {
    const response = await api.get("/vip-types");
    return response.data;
};

// POST SEND VIP
export const sendVip = async (formData) => {
    const response = await api.post("/send-vip-gift", formData);
    return response.data;
};

// POST BUY VIP
export const buyVip = async (formData) => {
    const response = await api.post("/buy-vip", formData);
    return response.data;
};

// GET FRIENDS
export const getFriends = async () => {
    const response = await api.get(`/get-friends/905`);
    console.log(response.data)
    return response.data;
};