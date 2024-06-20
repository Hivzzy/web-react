import * as React from "react";
import Box from "@mui/material/Box";


function LayoutDashboard({ children }) {

  return (
    <Box sx={{
      position: 'relative',
      zIndex: 2,
      padding: 3
    }}>
      {children}
    </Box>
  );
}

export default LayoutDashboard;
