import React from 'react';
import { Switch as MuiSwitch, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/Brightness2';

// Define the custom switch with styles based on theme
const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 65,
  height: 26,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 32,
      transform: 'translateX(10px)',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(38px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(38px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
      },
    },
    '&:not(.Mui-checked)': {
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgba(0, 35, 11, 0.2)',
    width: 28,
    height: 28,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .MuiSwitch-track': {
    borderRadius: 34 / 2,
    opacity: 1,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
    boxSizing: 'border-box',
  },
}));

const ThemeSwitch = ({ checked, onChange }) => {
  const theme = useTheme(); // Use the theme here

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <CustomSwitch
        checked={checked}
        onChange={onChange}
        icon={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', marginLeft: '4px' }}>
            <SunIcon sx={{ color: '#FFA500', fontSize: 22 }} />
          </Box>
        }
        checkedIcon={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <MoonIcon sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', fontSize: 22 }} />
          </Box>
        }
      />
    </Box>
  );
};

export default ThemeSwitch;
