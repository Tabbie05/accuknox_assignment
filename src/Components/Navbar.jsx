import React from "react";
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 1,
              padding: "0 8px",
              width: { xs: "100px", sm: "200px", md: "300px" },
            }}
          >
            {/* <SearchIcon sx={{ color: "gray", marginRight: 1 }} /> */}
            <InputBase
              placeholder="Search here…"
              sx={{ flex: 1, fontSize: "0.9rem" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
