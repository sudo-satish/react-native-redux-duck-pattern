function createDuck(prefix, desc) {
  const {_initialState, ...actions} = desc;

  const handlers = {};
  const actionCreators = {};

  Reflect.ownKeys(actions).forEach((actionName) => {
    const action = `${prefix}/${actionName}`;
    const actionReducer = actions[actionName];

    const actionCreator = (...args) => ({
      type: action,
      payload: args
    });
    actionCreator.toString = () => action;
    actionCreators[actionName] = actionCreator;

    if (actionReducer) {
      handlers[action] = (state, action) => actionReducer(...action.payload)(state);
    }
  });

  const reducer = (state = _initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };

  return [actionCreators, reducer]
}

export default createDuck;
