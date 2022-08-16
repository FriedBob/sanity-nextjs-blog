import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import Footer from "../../Components/PageComponents/Footer";
import Header from "../../Components/PageComponents/Header";
import { postsState } from "../../Components/states/dataStore";
import * as S from "../../Components/AboutComponents/styles";

const prefix =
  process.env.NODE_ENV === "production" ? "sanity-nextjs-blog" : "";

export interface PostProps {
  author: { image: string; name: string; role: string }; // 글 작성자
  createdAt: string; // 글 작성시기
  slug: string; // 포스트 고유값 (pathname)
  subtitle: string; // 글 부제
  thumbnail: { alt: string; imageUrl: string };
  title: string;
  tag: TagProps; // 게시물 태그
}

export interface TagProps {
  title: string;
  slug: string;
}

/**
 * ----------- About Page ------------
 *
 */
const IndexPage = () => {
  const [postsData, setPostsData] = useRecoilState<PostProps[]>(postsState); // posts 배열 데이터를 담을 recoilState 선언
  const router = useRouter();

  const handleHomeClick = () => {
    router.push(`${prefix}/`);
  };

  return (
    <S.Container>
      <Header posts={postsData} handleHomeClick={handleHomeClick} />
      <Divider />
      <Stack alignItems="center" justifyContent="center" height="600px">
        <Avatar
          alt="FriedBob"
          src="https://avatars.githubusercontent.com/u/50436527?v=4"
          sx={{
            mb: "2rem",
            width: 300,
            height: 300,
            boxShadow: "2px 0px 6px 1px rgba(4,4,4,0.8)",
            transform: "translate(0px, -30px)",
          }}
        />
        <Typography variant="h3" fontWeight="600" sx={{ mb: "1rem" }}>
          FriedBob
        </Typography>
        <Typography variant="body1">FriedBob 의 gitHub입니다</Typography>
        <Typography variant="body1">
          <a
            href="https://github.com/FriedBob"
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/FriedBob
          </a>
        </Typography>
      </Stack>
      <Divider sx={{ mt: "5rem" }} />
      <Footer />
    </S.Container>
  );
};

export default IndexPage;
