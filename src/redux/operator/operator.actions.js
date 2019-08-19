import { OperatorActionTypes } from "./operator.types";
import axios from "axios";

import { operatorsLooper, filterOperators } from "../../helpers/misc";


export const getOperators = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://admin-6c108.firebaseio.com/operators.json"
    );
    console.log(res);
    dispatch({
      type: OperatorActionTypes.GET_OPERTORS_SUCCESS,
      payload: operatorsLooper(res.data)
    });
  } catch (err) {
    console.log(err);
  }
};

export const addOperator = fomrData => async dispatch => {
  console.log(fomrData)
  try {
    const res = await axios.post(
      "https://admin-6c108.firebaseio.com/operators.json",
      fomrData
    );
    dispatch({
      type: OperatorActionTypes.ADD_OPERATOR_SUCCESS,
      payload: res.data
    })
  } catch (err) { }
};

export const showModal = () => async dispatch => {
  try {
    dispatch({
      type: OperatorActionTypes.ADD_OPERATOR_START
    })
  } catch (err) {

  }
}

export const closeModal = () => async dispatch => {
  try {
    dispatch({
      type: OperatorActionTypes.ADD_OPERATOR_CLOSE
    })
  } catch (err) {

  }
}

export const searchOperators = (query) => async dispatch => {

  try {
    const res = await axios.get(
      "https://admin-6c108.firebaseio.com/operators.json"
    );
    console.log(res);

    dispatch({
      type: OperatorActionTypes.SEARCH_OPERATORS,
      payload: filterOperators(res.data, query.query)
    })
  } catch (err) {
    console.log(err)
  }
}

export const editOperator = (operatorId, fomrData) => async dispatch => {
  console.log(fomrData)
  try {
   
    const res = await axios.patch(
      `https://admin-6c108.firebaseio.com/operators/${operatorId}/.json`,
      fomrData
    );
    console.log(res)
    dispatch({
        type:OperatorActionTypes.EDIT_OPERATOR_SUCCESS,
        payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
};

export const showEditModal = (operatorId) => async dispatch => {
  console.log(operatorId)
  try {
    dispatch({
      type: OperatorActionTypes.EDIT_OPERATOR_START,
      payload: operatorId
    })
  } catch (err) {

  }
}

export const closeEditModal = () => async dispatch => {
  try {
    dispatch({
      type: OperatorActionTypes.EDIT_OPERATOR_CLOSE
    })
  } catch (err) {

  }
}
