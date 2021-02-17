import axios from 'axios';

export default axios.create({
  baseURL: process.env.BLACKSMITH_ADMIN_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
