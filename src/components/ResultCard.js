import { Button } from 'bootstrap'
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Globalcontext } from '../GlobalProvider'

export default function ResultCard({movie}) {
  const{disphss}=useContext(Globalcontext)
  return (
 <> <div >
 
<div style={{ display:"flex",justifyContent:"space-between" }}>
<div>{movie.Title} </div>
<div>{movie.Year}</div>
</div>
<div ><img src={movie.Poster} /> </div>
<div style={{ display:"flex",justifyContent:"space-between" }}>
<button 
 onClick={()=>disphss({type : "ADD_Watchlist" , payload : movie })}
>Go Watchlist</button>
<button
 
>Go Watched</button>
</div>
</div> 
 






 </>)}
