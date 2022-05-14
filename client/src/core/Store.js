import { observable } from "./observe";

export const createStore = (reducer) => {
  const state = observable(reducer());

  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  const getState = () => frozenState;

  const createThunkMiddleware = (extraArgument) => {
    return ({ dispatch, getState }) =>
      (next) =>
      (action) => {
        if (typeof action === "function") {
          // 2번
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
  };

  return { getState, dispatch, createThunkMiddleware };
};
