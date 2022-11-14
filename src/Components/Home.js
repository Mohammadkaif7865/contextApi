import React,{useContext} from 'react';
import AppContext from '../Context/App-context';
function Home(){
  const {message } = useContext(AppContext);
 return(
     <>
       <h1>This is Home Component</h1>
       <p>{message}</p>
     </>
)}
export default Home;