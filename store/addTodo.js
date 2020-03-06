import createDuck from './createDuck';

const _initialState = {
  todo: [{
    id: 1, title: 'initial todo'
  }]
};

const [{
  addTodo
}, reducer] = createDuck('app/todoapp', {
  _initialState,
  addTodo: todo => state => ({
    ...state,
    todo: [
      ...state.todo,
      {id: state.todo.length+1, title: todo}
    ]
  })
});

export {
  addTodo
}

export default reducer;