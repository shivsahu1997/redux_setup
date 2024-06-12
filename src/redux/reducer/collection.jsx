import { ALL_DATA, POPUP } from "../action/type";

const initialState = {
  isAuth: true,
};
const collection = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return { ...state, allData: action.payload };
    case POPUP:
      return { ...state, popData: action.payload };
    default:
      return { ...state };
  }
};

export default collection;
