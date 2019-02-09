import axios from "axios";

let loggedUser = (name, emailId) => async dispactch => {
  let data = {
    name: name,
    email: emailId
  };
  let response = await axios.post(
    "https://cors-anywhere.herokuapp.com/https://aliste-server.herokuapp.com/api/setup/user",
    {
      headers: {
        "Content-Type": "application/json"
      },
      data
    }
  );

  dispactch({
    type: "LOGGED_USER",
    payload: response
  });
};

export default loggedUser;
