import { ChevronLeft } from "@material-ui/icons";
import {
  ADD_ITEMS_REQUEST,
  ADD_ITEMS_SUCCESS,
  ADD_ITEMS_FAIL,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  DELETE_ITEM_SUCCESS,
  GET_ITEM_BY_ID_SUCCESS,
  GET_ITEM_BY_ID_REQUEST,
  UPDATE_ITEM,
} from "../constants/App";

const initialState = {
  data: [
    {
      id: 1,
      name: "MacCaffee",
      price: "25",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      category: "coffee",
    },
    {
      id: 2,
      name: "donald",
      price: "25",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      category: "junkfood",
    },
    {
      id: 3,
      name: "juice",
      price: "25",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      category: "drink",
    },
  ],
  singleData: null,
};

export default function ItemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEMS_REQUEST:
      return {
        loading: true,
        error: "",
      };
    case ADD_ITEMS_SUCCESS:
     
      return {
        ...state,
        data: [...state.data, action.data],
        loading: false,
        error: "",
      };
    case ADD_ITEMS_FAIL:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: "",
      };

    case GET_ITEM_REQUEST:
      return {
        loading: true,
        error: "",
      };
    case GET_ITEM_SUCCESS:
      return {
        data: state.data,
        loading: false,
        error: "",
      };
    case GET_ITEM_FAIL:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: "",
      };
    case DELETE_ITEM_SUCCESS:
      return {
        data: state.data.filter((temp) => temp.id != action.data),
        loading: false,
        error: "",
      };
    case GET_ITEM_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ITEM_BY_ID_SUCCESS:

      let arr = state.data.filter((tmp) => tmp.id == action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        singleData: arr,
        loading: false,
        error: "",
      };

    case UPDATE_ITEM:
      return {
        ...state,
        data: state.data.map((temp) =>
          temp.id == action.payload.id ? action.payload : temp
        ),
      };
    default:
      return state;
  }
}
