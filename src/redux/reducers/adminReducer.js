import {
  GET_USERS,
} from '../actions/types'

const INITIAL_STATE = {
  users: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      console.log("// GET_USERS ACTION FIRED //");
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
