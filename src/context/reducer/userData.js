import { SET_lOGIN_ERROR,LOGIN_USER,SET_DASHBOARD_DATA} from "../actionTypes/actionTypes";

const initialState = {
  user:[],
  isLoading:false,
  loginError:null,
  numOfItems: 0,
  dashboard_data:[],
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
      case SET_DASHBOARD_DATA:
            return{
             ...state,dashboard_data:action.payload,
            };
    default:
      return state;
  }
};