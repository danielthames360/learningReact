import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
          <Tooltip title="Logout">
            <IconButton color="success">
              <LogoutOutlined />
            </IconButton>
          </Tooltip>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
