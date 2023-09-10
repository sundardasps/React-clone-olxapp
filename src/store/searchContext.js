import { createContext,useState } from "react";

export const SearchContext  = createContext(null)

 function Search ({children}){

const [searchResult,setSearched] = useState(null)

   return(
     <SearchContext.Provider value={{searchResult,setSearched}}>
        {children}
     </SearchContext.Provider>
   )
}

export default Search;