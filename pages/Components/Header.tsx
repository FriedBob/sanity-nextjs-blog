import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

const pages = ["1", "2", "3"]; // 이동할 페이지 백업

interface buttonProps {
  handleHomeClick: () => void;
}

const Header = ({ handleHomeClick }: buttonProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0 0 0 0",
          color: "#302e2e",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            "&.MuiContainer-root": {
              paddingLeft: "0.3rem",
            },
          }}
        >
          <Toolbar sx={{ "&.MuiToolbar-root": { padding: 0 } }}>
            <Button
              size="large"
              color="inherit"
              aria-label="home"
              onClick={handleHomeClick}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <HomeIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, ml: 1, fontWeight: 600 }}
              >
                Shin&apos;s Blog
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
