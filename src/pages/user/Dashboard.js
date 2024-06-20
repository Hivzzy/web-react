import React from "react";
import { Grid, IconButton, Box, Stack, useTheme } from "@mui/material";
import CustomTypography, { BlueDot, StraightLine, CustomContainedButton, CustomOutlinedButton } from "../../components/layout/component/typography/typography";
import Insta from "../../components/layout/component/icon/insta";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ThemeSwitch from "../../components/layout/component/switch/ThemeSwitch";
import ClientCard from "../../components/layout/component/client/ClientCard";
import ToolsCard from "../../components/layout/component/tool/ToolCard";

function Dashboard({ onThemeChange, darkMode }) {
  const theme = useTheme();

  return (
    <Grid container pl={4} py={1}>
      <Grid item xs={2} sx={{ pl: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CustomTypography lineHeight="1.5" variant="h1" fontWeight={700} textSize="32px">
          aku, habban<BlueDot />
        </CustomTypography>
      </Grid>
      <Grid item xs={4} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid container sx={{
          border: 1,
          borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
          borderRadius: '20px',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          maxWidth: '420px',
          paddingX: 2
        }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}>
              <Box marginX={1} display="flex" alignItems="center" gap={1}>
                <Insta width="17px" height="17px" />
                <CustomTypography
                  variant="h6"
                  fontWeight={600}
                  textSize="12px"
                  sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
                >
                  Social Media
                </CustomTypography>
              </Box>
            </IconButton>
            <Box marginX={1} display="flex" alignItems="center" gap={1}>
              <CustomTypography
                variant="h2"
                fontWeight={400}
                textSize="12px"
                sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
              >
                •
              </CustomTypography>
            </Box>
            <Box marginX={1} display="flex" alignItems="center" gap={1}>
              <CustomTypography
                fontWeight={500}
                textSize="12px"
              >
                Discover My Social Media Profiles
              </CustomTypography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <ArrowForwardIosIcon sx={{ fontSize: 'small' }} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid container sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '2',
          marginRight: '2rem',
        }}>
          <Grid item xs={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomTypography variant="h1" fontWeight={300} textSize="16px">
              ABOUT
            </CustomTypography>
          </Grid>
          <Grid item xs={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomTypography variant="h1" fontWeight={300} textSize="16px">
              PROJECT
            </CustomTypography>
          </Grid>
          <Grid item xs={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomTypography variant="h1" fontWeight={300} textSize="16px">
              JOURNEY
            </CustomTypography>
          </Grid>
          <Grid item xs={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomTypography variant="h1" fontWeight={300} textSize="16px">
              BLOG
            </CustomTypography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ThemeSwitch checked={darkMode} onChange={onThemeChange} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '80vh' }}>
        <Grid item xs={6} >
          <Grid container >
            <Grid item xs={12} display="flex" justifyContent="flex-start"
              alignItems="flex-start">
              <ClientCard />
            </Grid>
            <Grid item xs={12} marginRight={'10%'} display="flex" justifyContent="flex-end"
              alignItems="center">
              <ToolsCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} justifyContent="center" alignItems="initial">
          <Stack>
            <Grid container>
              <Grid item xs={12}>
                <CustomTypography lineHeight="1.5" variant="h1" fontWeight={300} textSize="40px">
                  <StraightLine width="10%" sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} thickness="2px" /> Hello 🧑
                </CustomTypography>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <CustomTypography lineHeight="1.5" variant="h1" fontWeight={500} textSize="128px">
                      I'm
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTypography lineHeight="1.5" variant="h1" fontWeight={700} textSize="128px"> Habban</CustomTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <CustomTypography lineHeight="1.5" variant="h1" fontWeight={400} textSize="36px">
                  I am a student who has some work experience.
                </CustomTypography>
              </Grid>
              <Grid item xs={12} >
                <Grid container >
                  <Grid item xs={4} p={4}>
                    <CustomOutlinedButton variant="outlined"><CustomTypography fontWeight={500} lineHeight="1.5" variant="h1" textSize="16px" sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} >Download CV</CustomTypography></CustomOutlinedButton>
                  </Grid>
                  <Grid item xs={4} p={4}>
                    <CustomContainedButton variant="contained" p={4}><CustomTypography fontWeight={500} lineHeight="1.5" variant="h1" textSize="16px" sx={{ color: theme.palette.mode === 'dark' ? 'black' : 'white' }} >My Works</CustomTypography></CustomContainedButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="flex-start" alignItems="center">
                <Grid container display="flex" justifyContent="flex-start" alignItems="center" spacing={2}>
                  <Grid item display="flex" justifyContent="flex-start" alignItems="center">
                    <IconButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      href="https://github.com/your-profile" // Ganti dengan URL profil GitHub Anda
                    >
                      <GitHubIcon sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      href="https://www.linkedin.com/in/your-profile" // Ganti dengan URL profil LinkedIn Anda
                    >
                      <LinkedInIcon sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      href="mailto:your-email@example.com" // Ganti dengan email Anda
                    >
                      <EmailIcon sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
