import React, { useContext, useState } from 'react';
import AppContext from '../Context/app-context';
function Home() {
  const { message1, isAuth, setIsAuth, setMessage1 } = useContext(AppContext);
  const [message, setMessage] = useState(message1);
  return (
    <>
      <h1 style={{ backgroundColor: isAuth ? "green" : "red" }}>This is Home Component</h1>
      {
        isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Login</button>
      }
      <form >
        <label htmlFor="message">Message1</label>
        <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => setMessage1(message)}></button>
      </form>
      <p>{message1}</p>
    </>
  )
}
export default Home;