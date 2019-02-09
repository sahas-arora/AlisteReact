export default function(state = [], action) {
  console.log("The payload is:", action.payload);
  switch (action.type) {
    case "LOGGED_USER":
      return action.payload || false;
    default:
      return state;
  }
}
