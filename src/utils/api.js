








const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


import axios from 'axios';

export const FetchData = async (type,sw, ne) => {
  const {
    data: { data },
  } = await axios.get(
    `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'ef561d82e7msh4a04174faac2a39p1e1c71jsnfd0b978cc5c8',
      },
    }
  );

  return data;
};
