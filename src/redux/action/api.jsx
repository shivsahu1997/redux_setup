import axios from "axios";
import { ALL_DATA, POPUP } from "./type";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://api.publicapis.org/entries");
    const data = response.data.entries;
    dispatch({ type: ALL_DATA, payload: data });
  } catch (error) {
    dispatch({ type: ALL_DATA, payload: error.message });
  }
};

export const setPopup = (data) => {
  return { type: POPUP, payload: data };
};
