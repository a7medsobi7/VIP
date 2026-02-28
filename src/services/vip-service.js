
import api from "./api";

export const getVipTypes = async () => {
    const response = await api.get("/vip-types");
    return response.data;
};