import React, { useContext, useState } from 'react';
import AppContext from '../Context/app-context';
function Home() {
  // just taking back date commits for 09/12/2022 and 10/12/2022 and now onwards
  const { message1, isAuth, setIsAuth, setMessage1 } = useContext(AppContext);
  const [message, setMessage] = useState(message1);
  return (
    <div className="container">
      <h1 style={{ backgroundColor: isAuth ? "green" : "red" }}>This is Home Component</h1>
      {
        isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> : <button onClick={() => setIsAuth(true)}>Login</button>
      }

      <div>
        <label htmlFor="message">Message1</label>
        <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => setMessage1(message)}>Change</button>
      </div>

      <p>{message1}</p>
    </div>
  )
}
export default Home;