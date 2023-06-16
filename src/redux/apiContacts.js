import axios from 'axios';

const url = axios.create({
  baseURL: 'https://63ebe5f3be929df00ca4038a.mockapi.io/contacts',
});

export const apiContacts = async () => {
  const { data } = await url.get('/');
  return data;
};
