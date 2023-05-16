import { SET_lOGIN_ERROR,LOGIN_USER} from "../actionTypes/actionTypes";

const initialState = {
  user:[],
  isLoading:false,
  loginError:null,
  numOfItems: 0,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN_USER:
        return{
          ...state,user:action.payload,
        };
        case SET_lOGIN_ERROR:
          return{
            ...state,loginError:action.payload,
          };
    default:
      return state;
  }
};