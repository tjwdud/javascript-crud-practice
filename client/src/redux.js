import { createStore } from "./core/Store";

const initState = {
  post: ["초기값"],
};

export const SET_POST = "SET_POST";
// export const SET_B = "SET_B";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, post: action.payload };
    // case "SET_B":
    //   return { ...state, b: action.payload };
    default:
      return state;
  }
});

export const setPost = (payload) => ({ type: SET_POST, payload });
// export const setB = (payload) => ({ type: SET_B, payload });
