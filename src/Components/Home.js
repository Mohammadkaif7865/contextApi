import React, { useContext } from 'react';
import AppContext from '../Context/app-context';
function Home() {
  const { message1 } = useContext(AppContext);
  return (
    <>
      <h1>This is Home Component</h1>
      <p>{message1}</p>
    </>
  )
}
export default Home;