const initalState = {
  store: {},
};

const Reducers = (state = initalState, action) => {
  switch (action.type) {
    case 'openStore':
      return { action: action.type, store: action.store };
  }
};
export default Reducers;
