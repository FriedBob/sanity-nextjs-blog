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
import { useRouter } from "next/router";
import { prefix } from "../../config/config";

const pages = ["Post", "Author", "About"]; // 이동할 페이지 백업
interface InputProps {
  handleHomeClick: () => void;
  posts?: Array<PostProps>;
}

interface PostProps {
  author: { image: string; name: string; role: string }; // 글 작성자
  createdAt: string; // 글 작성시기
  slug: string; // 포스트 고유값 (pathname)
  subtitle: string; // 글 부제
  thumbnail: { alt: string; imageUrl: string };
  title: string;
  tag: TagProps; // 게시물 태그
}

interface TagProps {
  title: string;
  slug: string;
}

// interface buttonProps {
//   handleHomeClick: () => void;
// }

/**
 *  헤더
 *  Header.tsx
 */
const Header = ({ handleHomeClick, posts }: InputProps) => {
  // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const ref = useRef();

  const router = useRouter();

  // 서브메뉴 버튼 클릭 시 로직
  const clickPost = () => {
    router.push(`${prefix}/post`);
    // console.log(posts);
    // router.push(
    //   { pathname: "/post", query: { posts: JSON.stringify(posts) } }
    //   // "/post"
    // );
  };
  const clickAuthor = () => {
    console.log("clickAuthor");
  };
  const clickAbout = () => {
    router.push(`${prefix}/about`);
    // console.log("clickAbout");
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
                disabled
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
