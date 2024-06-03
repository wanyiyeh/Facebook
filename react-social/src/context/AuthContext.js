import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "657725a88578ab664f11b4ae",
    username: "hey",
    email: "hey@email.com",
    password: "$2b$10$enXYW.UaOwy0rUrD1db1BODIMjk2l64mqjq73KlCrMegRdGVBXp1.",
    profilePicture: "",
    coverPicture: "",
    followers: ["6577306d17a6562f6f6bc398"],
    followings: ["657725a88578ab664f11b4ae", "657725a88578ab664f11b4ae"],
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
