import { Grid, Typography, Button } from "@mui/material";

function Footer() {
  return (
    <>
      <Grid height={100}></Grid>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 2 }}
        bgcolor={"#202B40"}
        height={300}
      >
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src="/logo-polban.png"
            alt="logo-polban"
            style={{ width: "30%" }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            color: "white",
          }}
        >
          <Typography mt={10} fontWeight={"bold"}>
            Alamat
          </Typography>
          <Typography>
            Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung
            Barat, Jawa Barat 40559
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ color: "white" }}>
          <Typography mt={10} fontWeight={"bold"}>
            Contact Person
          </Typography>
          <Button
            variant="text"
            size="small"
            sx={{ display: "block", padding: "2%" }}
          >
            Email
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{ display: "block", padding: "2%" }}
          >
            Nomor Telepon
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
