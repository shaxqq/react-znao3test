import React from 'react';
import Container from '@material-ui/core/Container';

import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles( ()=>({
  box: {
    backgroundColor: '#54fc2d',
    height: '100hv',
  }
}));

const CreatePage = ()=>{
  return(
    <div>
        <TextField
          id="outlined-name"
          label="Name"
          margin="normal"
          variant="outlined"
        />
    </div>
  )
};
export default CreatePage