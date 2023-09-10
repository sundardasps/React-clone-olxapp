import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


export default function Signup() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [username ,setUsername] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [phone ,setPhone] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
     if(email === null || email === ""){
      alert("Email must be needed")
     }else if(password === null || password === ""){
      alert("Password must be needed")                      
     }else if(username === null || username === ""){
      alert("Username must be needed")                           
     }else if(phone === null || phone === "" ){
      alert("Phone number must be needed")                                                    
     }else{
      
     }


    firebase.auth().createUserWithEmailAndPassword(email.trim(),password.trim()).then((result)=>{
        result.user.updateProfile({displayName:username}).then(()=>{
             firebase.firestore().collection('users').add({
               id:result.user.uid,
               username:username.trim(),
               phone:phone.trim()
             }).then(()=>{
                 history.push('/login')
        })
        })
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a  onClick={()=>{
          history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
