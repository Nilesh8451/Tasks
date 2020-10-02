const redux = require("redux");
const createStore = redux.createStore;

// Action
const BUY_CAKE = "BUY_CAKE";

// Action Creater
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

// Reducers

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// Store

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
