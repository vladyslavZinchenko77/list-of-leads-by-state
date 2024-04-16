const API_URL = 'https://jsonplaceholder.typicode.com';

export const getStates = async () => {
  const response = await fetch(`${API_URL}/users`);
  const users = await response.json();
  return mapUsersToStates(users);
};

export const addState = async (newState) => {

  return { id: Math.random(), name: newState.name, zones: [] };
};

const mapUsersToStates = (users) => {
  const states = [];
  const usersByCity = groupByCity(users);

  for (const [city, cityUsers] of Object.entries(usersByCity)) {
    const zones = groupByZipCode(cityUsers);
    const state = {
      id: city,
      name: city,
      zones: Object.entries(zones).map(([zipCode, zoneUsers]) => ({
        id: zipCode,
        name: zipCode,
        leads: zoneUsers.map((user) => ({
          id: user.id,
          name: user.name,
        })),
      })),
    };
    states.push(state);
  }

  return states;
};

const groupByCity = (users) => {
  return users.reduce((acc, user) => {
    const city = user.address.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(user);
    return acc;
  }, {});
};

const groupByZipCode = (users) => {
  return users.reduce((acc, user) => {
    const zipCode = user.address.zipcode;
    if (!acc[zipCode]) {
      acc[zipCode] = [];
    }
    acc[zipCode].push(user);
    return acc;
  }, {});
};