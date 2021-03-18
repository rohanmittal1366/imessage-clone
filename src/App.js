import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Imessage from "./Components/imessage/Imessage";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Components/Login/Login";
import { auth } from "./firebase/firebase";


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);



  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is not logged in
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
