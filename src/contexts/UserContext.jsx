import { createContext, useEffect, useReducer } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

import { createAction } from "../utils/reducer/reducer";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTONS_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log(action)
  const { type, payload } = action;

  switch (type) {
    case USER_ACTONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }  
};

const INITIAL_STATE = {
  currentUser:null
}
export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer,INITIAL_STATE )
  const {currentUser} = state;
  console.log(currentUser)

  const setCurrentUser = (user)=>{
    dispatch(createAction(USER_ACTONS_TYPES.SET_CURRENT_USER,user))
  }


  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
