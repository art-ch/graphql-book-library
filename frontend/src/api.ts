import axios from 'axios';

export const fetchData = async (query: string) => {
  const {
    data: { data }
  } = await axios({
    url: 'http://localhost:5000/graphql',
    method: 'POST',
    data: {
      query
    }
  });
  return data;
};
