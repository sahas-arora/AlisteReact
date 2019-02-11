export default (state = [], action) => {
  console.log("The payload is:", action.payload);

  switch (action.type) {
    case "SETUP_HOUSE":
      return action.payload;

    default:
      return state;
  }
};
