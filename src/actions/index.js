import axios from "axios";

let loggedUser = (name, emailId) => async dispactch => {
  let data = {
    name: name,
    email: emailId
  };

  let response = await axios.post(
    "https://cors-anywhere.herokuapp.com/https://aliste-server.herokuapp.com/api/setup/user",
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  console.log(response);

  dispactch({
    type: "LOGGED_USER",
    payload: response
  });
};

export const setupHose = (name, rooms, masters, creator) => async dispactch => {
  let data = {
    houseName: name,
    rooms: rooms,
    masters: masters,
    createdBy: creator
  };

  let response = await axios.post(
    "https://cors-anywhere.herokuapp.com/https://aliste-server.herokuapp.com/api/setup/home",
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  dispactch({
    type: "SETUP_HOUSE",
    payload: response
  });
};

export default loggedUser;
