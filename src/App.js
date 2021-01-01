import './App.css';

import {Typography, Box, Button} from '@material-ui/core';
import scarecrow from './Scarecrow.png';




function App() {
  return (
    <div id="App">
      <Typography id="t1" >404 not found ❌</Typography>
      <Box minHeight="100vh" display="flex" flexDirection="row" m="auto" flexWrap="wrap" justifyContent="center" alignItems="center"  >
          <Box >
            <img src={scarecrow} alt="img" id="img"></img>
          </Box>

          <Box flexDirection="col" flexWrap="wrap" p='0px 20px' width="350px"> 
          <Typography id="t2">I have bad news for you</Typography>
          <p id="t3">The page you are looking for might be removed or is temporarily unavailable</p>
          <Button id="btn" className="left">Back to homepage</Button>
          </Box>
      </Box>
      <Typography id="t4">Faisal Firdani@DevChallenges.io</Typography>
    </div>
  );
}

export default App;
