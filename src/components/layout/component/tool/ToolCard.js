import React from 'react';
import { Box, Avatar, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import AppsIcon from '@mui/icons-material/Apps';
import CustomTypography from '../typography/typography';

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
  color: theme.palette.mode === 'dark' ? 'black' : 'white',
  borderRadius: '16px',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
}));

const AvatarStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(4),
  '& > *': {
    margin: theme.spacing(-0.01),
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));

const tools = [
  { src: 'https://img.icons8.com/color/48/000000/react-native.png', alt: 'React' },
  { src: 'https://img.icons8.com/color/48/000000/figma.png', alt: 'Figma' },
  { src: 'https://img.icons8.com/color/48/000000/git.png', alt: 'Git' },
  { src: 'https://img.icons8.com/color/48/000000/nodejs.png', alt: 'Node.js' },
];

const ToolsCard = () => {
  const theme = useTheme();

  return (
    <CardContainer>
      <Stack gap={2}>
        <CustomTypography variant="h6" textSize="10px" color={theme.palette.mode === 'dark' ? 'black' : 'white'}>
          Tools Mastery:
        </CustomTypography>
        <AvatarStack>
          {tools.map((tool, index) => (
            <Avatar key={index} src={tool.src} alt={tool.alt} sx={{ width: 30, height: 30 }} />
          ))}
          <Avatar sx={{ width: 30, height: 30, bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white'  }}>
            <AppsIcon sx={{ color: theme.palette.mode === 'dark' ? 'White' : 'black' }} />
          </Avatar>
        </AvatarStack>
      </Stack>
    </CardContainer>
  );
};

export default ToolsCard;
