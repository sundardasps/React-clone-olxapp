
import react,{Suspense,useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route, } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {AuthContext, FirebaseContext} from './store/firebaseContext'
import Create from './Pages/Create'
import View  from './Pages/ViewPost'
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function Loading(){
  return <div>Loading..</div>
}

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} =  useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
       setUser(user)
    })
  })

  return (
    <div>
      <Post>
      <Router>
        <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signup" >
      <Signup />
      </Route>
      <Route path="/login" >
        <Suspense fallback={<Loading/>}>
       <Login />
        </Suspense>
      </Route>
      <Route path="/create" >
      <Create />
      </Route>
      <Route path="/view" >
      <View />
      </Route> 
      </Router>
      </Post>
    </div>
  );
}

export default App;
