import { OperatorActionTypes } from "./operator.types";
const INITIAL_STATE = {
  operators: [],
  visible: null,
  editVisible: null,
  operatorId: null
};

const operatorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OperatorActionTypes.GET_OPERTORS_SUCCESS:
      return {
        ...state,
        operators: action.payload
      };
    case OperatorActionTypes.ADD_OPERATOR_START:
      return {
        ...state,
        visible: true
      };
    case OperatorActionTypes.ADD_OPERATOR_CLOSE:
      return {
        ...state,
        visible: false
      };
    case OperatorActionTypes.ADD_OPERATOR_SUCCESS:
      return {
        ...state,
        visible: false
      };
    case OperatorActionTypes.SEARCH_OPERATORS:
      return {
        ...state,
        operators: action.payload
      };
    case OperatorActionTypes.EDIT_OPERATOR_START:
      return {
        ...state,
        editVisible: true,
        operatorId: action.payload
      };
    case OperatorActionTypes.EDIT_OPERATOR_SUCCESS:
      return {
        ...state,
        editVisible: false
      };
    case OperatorActionTypes.EDIT_OPERATOR_CLOSE:
      return {
        ...state,
        editVisible: false
      };
    default:
      return state;
  }
};

export default operatorReducer;