const increment = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(`Increment Reducer: Incrementing state.todos.increment [${state + 1}] ...`);
      return state + 1;
    default:
      return state;
  }
};

export default increment;
