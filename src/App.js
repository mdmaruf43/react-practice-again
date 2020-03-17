import React, { useState } from 'react';
import Tweets from './Tweet';
import './App.css';
function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);

  const [users, setUsers] = useState([
    {name: 'Maruf Ahmed', message: 'Hello ...'},
    {name: 'Razia Toma', message: 'Crazy Girl'},
    {name: 'Mostafizur Rahaman', message: 'Talanted Farmar Guy'},
    {name: 'Rajib Hossin', message: 'A Doctor Guy'}
  ]);
  return (
    <div className="App">
      {
        users.map(user => <Tweets testUser={user}></Tweets>)
      }
    </div>
  );
}

export default App;
