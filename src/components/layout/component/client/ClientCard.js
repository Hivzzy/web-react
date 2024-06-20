import React from 'react';
import { Box, Avatar, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
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
  marginLeft: theme.spacing(3),
  '& > *': {
    margin: theme.spacing(-1),
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const avatars = [
  { src: `${process.env.PUBLIC_URL}/assets/client/Mask group.svg`, alt: 'Client 1' },
  { src: `${process.env.PUBLIC_URL}/assets/client/Mask group (1).svg`, alt: 'Client 2' },
  { src: `${process.env.PUBLIC_URL}/assets/client/Mask group (2).svg`, alt: 'Client 3' },
  { src: `${process.env.PUBLIC_URL}/assets/client/Mask group (3).svg`, alt: 'Client 4' },
];

const ClientCard = () => {
  const theme = useTheme();

  return (
    <CardContainer>
      <Stack gap={2}>
        <CustomTypography textSize='10px' variant="h6" color={theme.palette.mode === 'dark' ? 'black' : 'white'}>
          Real Client!
        </CustomTypography>
        <AvatarStack>
          {avatars.map((avatar, index) => (
            <Avatar key={index} src={avatar.src} alt={avatar.alt} />
          ))}
          <Avatar sx={{ bgcolor: theme.palette.mode === 'dark' ? 'black' : 'white' }}>
            <GroupAddIcon sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
          </Avatar>
        </AvatarStack>
      </Stack>
    </CardContainer>
  );
};

export default ClientCard;
