import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import {FirebaseContext} from '../../store/firebaseContext'
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import {PostContext} from '../../store/postContext';

function Posts() {
const {firebase} = useContext(FirebaseContext)
const [products,setProducts] = useState([])
const history = useHistory()

const {setPostDetails} = useContext(PostContext)

useEffect(()=>{
  
        firebase.firestore().collection('products').get().then((snapshot)=>{
             const allPost = snapshot.docs.map((products)=>{
                         return{
                          ...products.data(),
                          id:products.id,
                         }
             })
       setProducts(allPost)
        })
        
},[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
{   
   products.map((product)=>{
   return <div
            className="card"  onClick={()=>{
              setPostDetails(product)
             
              history.push('/view')
         }}
                   >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.name}</span>
              <p className="name">for:  {product.category}</p>
            </div>
            <div className="date">
              <span>posted:{product.createdAt}</span>
            </div>
          </div>
        
   })

}
</div>
      </div>
    
    </div>
  );
}

export default Posts;
