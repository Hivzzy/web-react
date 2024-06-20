// src/components/layout/component/typography/typography.js

import React from 'react';
import { Typography, styled, Button } from '@mui/material';

// Styled component for BlueDot
const BlueDot = styled('span')({
    height: '10px',  // Size of the dot
    width: '10px',   // Size of the dot
    backgroundColor: '#00B0FF', // Bright blue color
    borderRadius: '50%',        // Round shape
    display: 'inline-block',
    verticalAlign: 'middle',    // Align with text
    marginLeft: '5px',          // Space from the text
    position: 'relative',       // Allows fine positioning adjustments if needed
    top: '-10px',                // Adjust vertical position relative to the line
});

const BlackDot = styled('span')({
    height: '10px',  // Size of the dot
    width: '10px',   // Size of the dot
    backgroundColor: '#000000', // Black color
    borderRadius: '50%',        // Round shape
    display: 'inline-block',
    verticalAlign: 'middle',    // Align with text
    marginLeft: '5px',          // Space from the text
    position: 'relative',       // Allows fine positioning adjustments if needed
    top: '-10px',                // Adjust vertical position relative to the line
});

const StraightLine = styled('div')(({ theme, width, color, thickness }) => ({
  width: width || '100%',     // Default width is 100% if not provided
  height: thickness || '1px', // Default thickness is 1px if not provided
  backgroundColor: color || (theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'), // Default color is black for light mode and white for dark mode
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: 'auto',
  marginLeft: '10px',             // Center the line horizontally
  marginTop: '5px',               // Space above the line
  marginBottom: '10px',
}));

// Create styled button components
const CustomOutlinedButton = styled(Button)(({ theme }) => ({
  padding: '1rem',
  width: '100%',
  borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
  borderRadius: '30px',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  '&:hover': {
    backgroundColor: 'black',
    borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    color: 'white',
    '& .MuiTypography-root': { // Target the typography component within the button
      color: theme.palette.mode === 'dark' ? 'black' : 'white',
    },
  },
}));

const CustomContainedButton = styled(Button)(({ theme }) => ({
  padding: '1rem',
  width: '100%',
  borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
  borderRadius: '30px',
  backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
  color: theme.palette.mode === 'dark' ? 'black' : 'white',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
    borderColor: 'white', // Ensure the border color changes to white on hover
    color: 'white', // Ensure the button's text color changes to white on hover
    '& .MuiTypography-root': { // Target the typography component within the button
      color: theme.palette.mode === 'dark' ? 'white' : 'black',
    },
  },
}));

// CustomTypography component
function CustomTypography({ children, fontWeight = 400, textSize = '16px', letterSpacing = 'normal', lineHeight = 'normal', variant = 'body1', ...props }) {
  return (
    <Typography variant={variant} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight, fontSize: textSize, lineHeight, letterSpacing }} {...props}>
      {children}
    </Typography>
  );
}

// Export CustomTypography as default and BlueDot and BlackDot as named exports
export default CustomTypography;
export { BlueDot, BlackDot, StraightLine, CustomContainedButton, CustomOutlinedButton  };
