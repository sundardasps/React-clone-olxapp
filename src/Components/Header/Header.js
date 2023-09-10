import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext, FirebaseContext} from '../../store/firebaseContext'

function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" ></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage"  style={{
       textTransform: 'uppercase',
}}>
          
          <span>{user ? user.displayName : <button onClick={()=>{
             history.push('/login')
          }}  style={{
            backgroundColor: 'cyan',
            height:'5vb',
            color: 'white',               // Text color
            padding: '2px 20px ',         // Padding around text
            borderRadius: '5px',          // Rounded corners
            border: 'none',               // Remove default border
            cursor: 'pointer',            // Change cursor on hover
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add a subtle box shadow
            transition: 'background-color 0.3s, transform 0.3s',  // Add smooth transitions
        
          }}>Login</button>}</span>

          <hr />
        </div>
        {user && <button onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }} style={{
          backgroundColor: 'cyan',
          height:'5vb',
          color: 'white',               // Text color
          padding: '2px 20px ',         // Padding around text
          borderRadius: '5px',          // Rounded corners
          border: 'none',               // Remove default border
          cursor: 'pointer',            // Change cursor on hover
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add a subtle box shadow
          transition: 'background-color 0.3s, transform 0.3s',  // Add smooth transitions
      
        }}>Logout</button>}

        <div className="sellMenu" onClick={()=>{
        {user ? history.push('/create') :history.push('/login') }
        }} >
          <SellButton></SellButton>
          <div className="sellMenuContent" >
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
