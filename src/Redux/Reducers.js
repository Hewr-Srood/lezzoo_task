const initalState = {
  store: {},
  items: [],
};

const Reducers = (state = initalState, action) => {
  switch (action.type) {
    case 'openStore':
      return { ...state, action: action.type, store: action.store };
    case 'addToBasket':
      return { ...state, action: action.type, items: action.items };
    default:
      return state;
  }
};
export default Reducers;
