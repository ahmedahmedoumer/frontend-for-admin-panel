import { SET_lOGIN_ERROR,LOGIN_USER,SET_DASHBOARD_DATA,SET_VALIDATION_ERROR,SET_ALERT_MESSAGE,SET_ALL_USERS_DATA} from "../actionTypes/actionTypes";

const initialState = {
  user:[],
  isLoading:false,
  loginError:null,
  numOfItems: 0,
  dashboard_data:[],
  validation_error:[],
  alert_message:null,
  all_users_data:[],
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
       case SET_VALIDATION_ERROR:
        return {
          ...state,validation_error:action.payload,
        };  
      case SET_ALERT_MESSAGE:
          return {
            ...state,alert_message:action.payload,
          }  
      case SET_ALL_USERS_DATA:
              return {
                ...state,all_users_data:action.payload,
              }
    default:
      return state;
  }
};