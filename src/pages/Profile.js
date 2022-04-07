import React, {useState} from "react";
import {Footer} from "../components/Footer"
import profile from "../temp/FriedShrimp.png"
import f1 from "../temp/2.svg"
import f2 from "../temp/4.svg"
import {ReactComponent as Email} from "../temp/email.svg";
import {ReactComponent as UserName} from "../temp/userName.svg";
import {ReactComponent as Password} from "../temp/password.svg";
import back from "../temp/back.svg";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth"
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvHI9VTnITpL3IfVmn4FOL8gb03a54WgA",
  authDomain: "optimax-dev-9192d.firebaseapp.com",
  databaseURL: "https://optimax-dev-9192d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "optimax-dev-9192d",
  storageBucket: "optimax-dev-9192d.appspot.com",
  messagingSenderId: "1032962530085",
  appId: "1:1032962530085:web:d5498998c0fc724d3d18cc",
  measurementId: "G-7929C1S2X0"
};
const app = initializeApp(firebaseConfig);
​​const auth = getAuth(app);
​​const db = getFirestore(app);


export const Profile = () => {
  const [register, setRegister] = useState(() => {
    return {
        username: "",
        email: "",
        password: ""
    }
  })
  const changeInputRegister = event => {
    event.persist()
    setRegister(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    })
  }
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const submitChackIn = async event => {
    event.preventDefault();
    console.log(register);
    try {
      const res = await createUserWithEmailAndPassword(auth, register.email, register.password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
}

  const [nowScreen, setScreen] = useState("notLoginUser");
  const notLoginUser = (
    <div>
      <div id="profile">
        <div id="notLogin" className="container">
          <img className="notLoginImg" src={profile} alt=""/>
          <h2 className="notLoginText">Cooker App</h2>
          <p className="notLoginBottom">Let know you</p>
          <div className="buttons">
            <a href="/profile#SingIn" className="signIn" onClick={() => setScreen("signIn")}>Sign in</a>
            <a href="/profile#Register" className="register" onClick={() => setScreen("registration")}>Register</a>
          </div>
        </div>
        <div className="back">
          <span className="b1"></span>
          <span className="b2"></span>
          <span className="b3"></span>
          <span className="b4"></span>
          <span className="b5"></span>
          <span className="b6"></span>
          <span className="b7"></span>
        </div>
      </div>
      <Footer/>
    </div>
  )

  const registration = (
    <div>
      <div id="profile">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <span className="navbar-brand ms-2" onClick={() => setScreen("notLoginUser")}><img src={back} alt=""/></span>
            </div>
        </nav>
        <form id="registration" className="container" onSubmit={submitChackIn}>
          <img className="registrationImg" src={f1} alt=""/>
          <div className="searchbar mt-2">
            <span className="search_icon"><Email width="60%" height="100%"/></span>
            <input className="search_input" type="email" name="email" placeholder="Email" onChange={changeInputRegister}/>
          </div>
          <div className="searchbar mt-2">
            <span className="search_icon"><UserName width="60%" height="100%"/></span>
            <input className="search_input" type="text" name="username" placeholder="Username" onChange={changeInputRegister}/>
          </div>
          <div className="searchbar mt-2">
            <span className="search_icon"><Password width="60%" height="100%"/></span>
            <input className="search_input" type="text" name="password" placeholder="Password" onChange={changeInputRegister}/>
          </div>
          <button className="searchbar mt-4">Register</button>
        </form>
        <div className="back">
            <span className="b1"></span>
            <span className="b2"></span>
            <span className="b3"></span>
            <span className="b4"></span>
            <span className="b5"></span>
            <span className="b6"></span>
            <span className="b7"></span>
          </div>
      </div>
      <Footer/>
    </div>
  )

  const signIn = (
    <div>
      <div id="profile">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <span className="navbar-brand ms-2" onClick={() => setScreen("notLoginUser")}><img src={back} alt=""/></span>
            </div>
        </nav>
        <form id="signIn" className="container">
          <img className="signInImg" src={f2} alt=""/>
          <h3 className="signInText mt-4 mb-3">Welcome back</h3>
          <div className="searchbar mt-2">
            <span className="search_icon"><UserName width="60%" height="100%"/></span>
            <input className="search_input" type="text" name="usernameEmail" placeholder="Username, Email "/>
          </div>
          <div className="searchbar mt-2">
            <span className="search_icon"><Password width="60%" height="100%"/></span>
            <input className="search_input" type="text" name="password" placeholder="Password"/>
          </div>
          <button className="searchbar mt-4">Register</button>
        </form>
        <div className="back">
            <span className="b1"></span>
            <span className="b2"></span>
            <span className="b3"></span>
            <span className="b4"></span>
            <span className="b5"></span>
            <span className="b6"></span>
            <span className="b7"></span>
          </div>
      </div>
      <Footer/>
    </div>
  )

  if (nowScreen === "notLoginUser")
    return notLoginUser;
  else if (nowScreen === "registration")
    return registration;
  else
    return signIn;
}



