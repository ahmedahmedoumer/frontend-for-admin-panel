import { SET_lOGIN_ERROR,
  LOGIN_USER,
  SET_DASHBOARD_DATA,
  SET_VALIDATION_ERROR,
  SET_ALERT_MESSAGE,
  SET_ALL_USERS_DATA,
  SET_ALL_TASKS_DATA,
  SET_REPORTS_DATA,
  SET_PLANNER,
  USER_EDITOR_DIALOG,
  SET_DESIGNNER} from "../actionTypes/actionTypes";

const initialState = {
  user:[],
  isLoading:false,
  loginError:null,
  numOfItems: 0,
  dashboard_data:[],
  validation_error:[],
  alert_message:null,
  all_users_data:[],
  all_tasks:[],
  reports_data:[],
  planner_data:[],
  designner_data:[],
  editor_dialog_data:[],

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
      case SET_ALL_TASKS_DATA:
          return {
            ...state,all_tasks:action.payload,
          }
      case SET_REPORTS_DATA:
        return {
          ...state,reports_data:action.payload,
        }
        case SET_DESIGNNER:
          return {
            ...state,designner_data:action.payload,
          }
          case SET_PLANNER:
            return {
              ...state,planner_data:action.payload,
            }
            case USER_EDITOR_DIALOG:
              return {
              ...state,editor_dialog_data:action.payload,
              }
    default:
      return state;
  }
};







