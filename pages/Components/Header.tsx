import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { forwardRef, useCallback, useRef, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import * as S from "./styles";
import { Box } from "@mui/system";

const pages = ["Post", "Author", "About"]; // 이동할 페이지 백업

interface buttonProps {
  handleHomeClick: () => void;
}

/**
 *  헤더
 *  Header.tsx
 */
const Header = ({ handleHomeClick }: buttonProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const ref = useRef();

  // 서브메뉴 버튼 클릭 시 로직
  const clickPost = () => {
    console.log("clickPost");
  };
  const clickAuthor = () => {
    console.log("clickAuthor");
  };
  const clickAbout = () => {
    console.log("clickAbout");
  };

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
            <S.MenuButton
              size="large"
              color="inherit"
              aria-label="home"
              onClick={handleHomeClick}
            >
              <HomeIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, ml: 1, fontWeight: 600 }}
              >
                Shin&apos;s Blog
              </Typography>
              {/* 서브메뉴 아이콘 로직 */}
            </S.MenuButton>
            <Box
              sx={{
                ml: "1rem",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                onClick={clickPost}
                sx={{
                  px: "1rem",
                  my: 2,
                  color: "#302e2e",
                  display: "black",
                }}
              >
                {pages[0]}
              </Button>
              <Button
                onClick={clickAuthor}
                sx={{
                  px: "1rem",
                  my: 2,
                  color: "#302e2e",
                  display: "black",
                }}
              >
                {pages[1]}
              </Button>
              <Button
                onClick={clickAbout}
                sx={{
                  px: "1rem",
                  my: 2,
                  color: "#302e2e",
                  display: "black",
                }}
              >
                {pages[2]}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
