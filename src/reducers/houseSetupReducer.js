export default (state = [], action) => {
  switch (action.type) {
    case "SETUP_HOUSE":
      return action.payload;

    default:
      return state;
  }
};
