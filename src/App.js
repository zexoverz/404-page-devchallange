import './App.css';

import {Typography, Box, Button} from '@material-ui/core';
import scarecrow from './Scarecrow.png';

function App() {
  return (
    <div id="App">
      <Box display="flex" flexDirection="col" >
        <Box>
        <Typography id="t1" >404 not found</Typography>
        </Box>

        <Box display="flex" flexDirection="row" m="auto" p={15} >
          <Box p={1} mr={8} >
            <img src={scarecrow} alt="img" id="img"></img>
          </Box>

          <Box p={1} flexDirection="col">

            <Box>
              <Typography id="t2">I have bad news for you</Typography>
            </Box>

            <Box>
              <p id="t3">The page you are looking for might be removed or is temporarily unavailable</p>
            </Box>

            <Box>
            <Button id="btn" className="left">Back to homepage</Button>
            </Box>
          </Box>
        </Box>

        <Typography id="t4">Faisal Firdani@DevChallenges.io</Typography>
      </Box>
    </div>
  );
}

export default App;
