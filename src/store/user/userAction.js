import { createAction } from "../../utils/reducer/reducer"
import { USER_ACTONS_TYPES } from "./userTypes" 

export const setCurrentUser = (user)=> createAction(USER_ACTONS_TYPES.SET_CURRENT_USER,user);
  
