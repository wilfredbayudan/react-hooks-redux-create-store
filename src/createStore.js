function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };
};

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
};

let store = createStore(counterReducer);

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

store.dispatch({ type: "@@INIT" });
let button = document.getElementById("button");

button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
