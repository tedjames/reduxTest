import axios from 'axios'
import { GET_USERS } from './types'

export const getUsers = () => {
  return (dispatch) => {
    axios.get('http://localhost:3090/users')
      .then(res => {
        console.log("<-- // DATA RECEIVED FROM SERVER // --> ");
        console.log(res);
        dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch(({ response }) => {
        console.log("// ERROR RECEIVED FROM SERVER //");
        console.log(response);
      });
  }
};
