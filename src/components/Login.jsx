import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.css";
import { auth, provider } from "../firebase/firebase.utils";
import { actionTypes } from "../contexts/reducer";
import { useStateValue } from "../contexts/StateProvider";

const Login = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    // sign in code
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => err.message);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt="facebook"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
