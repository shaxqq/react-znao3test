import React from 'react';
import User from './components/UserArea/index'
import Admin from './components/AdminArea/index'

function App() {
  return (
      <div>
          {localStorage.usertoken ?
            <Admin />
            :
            <User />}
      </div>
  );
}

export default App;
