import {createContext,useState} from "react";

export const PostContext = createContext(null)


function Post ({children}){
const [postdetails,setPostDetails]  = useState();

    return(
    <PostContext.Provider value={{postdetails,setPostDetails}} >
      {children}
    </PostContext.Provider>
    )
}

export default Post;