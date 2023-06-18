const reducerTutorial = {
  name: "Tokyo",
  location: "japan", 
};

const reducer = (state = { ...reducerTutorial }, actions) => {
  switch (actions.type) {
    case "UPDATE_USERNAME":
      return {...state, name: actions.payload  };
    default:
      return state;
  }
};

export default reducer;
