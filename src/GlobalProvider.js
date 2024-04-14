import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'


const initialState = {
  watchlist : localStorage.getItem("watchlist") ? 
              JSON.parse(localStorage.getItem("watchlist")) : [] ,
  watched : localStorage.getItem("watched") ?
            JSON.parse(localStorage.getItem("watched")) : []
};


export const Globalcontext=createContext( )

const reduce=(state,action)=>{
switch(action.type){
   case "ADD_Watchlist" :
    return {
      ...state,
      watchlist:[action.paylod,...state.watchlist]
    }  
    case "DELET_Watchlist" :
      return {
        ...state,
        watchlist:state.watchlist.filter((mov)=> mov.imdbID!==action.paylod)
      }
      case "ADD_Watched" :
        return {
          ...state,
          watchlist:state.watchlist.filter((mov)=> mov.imdbID!==action.paylod),
          Watched:[action.paylod,...state.Watched]
        }  

      case "DELET_Watched" :
        return {
          ...state,
          Watched:state.Watched.filter((mov)=> mov.imdbID!==action.paylod)
        }
        case "Move_Watchlist" :
          return {
            ...state,
            Watched:state.Watched.filter((mov)=> mov.imdbID!==action.paylod),
            watchlist:[action.paylod,...state.watchlist]
          }  
    default :
    return state;
   
}}



function GlobalProvider({children}) {
  const[state,disph]=useReducer(reduce,initialState )
  useEffect(()=>{
    localStorage.setItem('watchlist' , JSON.stringify(state.watchlist))
    localStorage.setItem('watched' , JSON.stringify(state.watched))
  } , [state]) 
  
  
  
  
  
  
  return (
    <div>
        <Globalcontext.Provider value={{disphss: disph,watchlist:state.watchlist,Watched:state.Watched }}>
{children}
        </Globalcontext.Provider>
    </div>
  )
}

export default GlobalProvider