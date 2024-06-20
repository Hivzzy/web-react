import React from 'react';
import { Box } from '@mui/material';
import Circle from './component/circle/circle';  // Pastikan impor ini benar sesuai lokasi file Circle
import Person from './component/person/person';

function BackgroundLayout({ onThemeChange, darkMode }) {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      <Box sx={{ position: 'absolute', top: '-5%', left: '44%' }}>
        <Circle width="234px" height="193px" />
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', left: '-20%' }}>
        <Circle width="750px" height="700px" rotation="80"/>
      </Box>
      <Box sx={{ position: 'absolute', top: '30%', left: '78%' }}>
        <Circle width="550px" height="500px" rotation="45" />
      </Box>
      <Box sx={{ position: 'absolute', top: '30%', left: '10%' }}>
        <Person width="550px" height="500px" />
      </Box>
    </Box>
  );
}

export default BackgroundLayout;
