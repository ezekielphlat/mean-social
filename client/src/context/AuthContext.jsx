import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "62fcca04965456df1a8aed1b",
    username: "Jane",
    email: "Jane@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: "2022-08-17T10:59:16.791Z",
    city: "Lagos",
    desc: "This is the admin super user",
    from: "Nigeria",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
