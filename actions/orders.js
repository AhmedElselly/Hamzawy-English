import axios from 'axios';

const url = 'http://localhost:3000/api/orders';

export const getOrders = async () => {
    const res = await axios.get(`${url}`);
    return res;
}