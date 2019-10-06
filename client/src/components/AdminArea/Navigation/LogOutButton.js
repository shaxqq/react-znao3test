import React from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function LogOutButton () {
  const history = useHistory();

  const logOut =(e)=>{
    e.preventDefault();
    localStorage.removeItem('usertoken');
    history.push('/')
  };
return(
    <Button variant='contained' onClick={logOut}>logout</Button>
  )
}


export default LogOutButton;