export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

export default fetchData;
