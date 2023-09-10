import React,{ useState,useContext,useEffect } from 'react';
import { PostContext } from '../../store/postContext';
import './View.css';
import { FirebaseContext } from '../../store/firebaseContext';

function View() {
  const [userDetails,setUserDetails] = useState()
  const {postdetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    if(postdetails){
       const {userId} = postdetails
       firebase.firestore().collection('users').where('id','==' ,userId).get().then((res)=>{
               res.forEach(doc =>{
                
                     setUserDetails(doc.data())
                    
               })
       })
      }
  },[])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetails.price} </p>
          <span>{postdetails.name}</span>
          <p>{postdetails.category}</p>
          <span>{postdetails.createdAt}</span>
        </div>
    {userDetails && <div className="contactDetails">
      <p>Seller details</p>
      <p>{userDetails.username}</p>
      <p>{userDetails.phone}</p>
    </div>}
      </div>
    </div>
  );
}
export default View;
