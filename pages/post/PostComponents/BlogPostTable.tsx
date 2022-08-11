import {
  Avatar,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { postsState } from "../../../Components/states/dataStore";

export interface PostProps {
  author: { image: string; name: string; role: string }; // 글 작성자
  createdAt: string; // 글 작성시기
  slug: string; // 포스트 고유값 (pathname)
  subtitle: string; // 글 부제
  thumbnail: { alt: string; imageUrl: string };
  title: string;
  tag: { title: string; slug: string }; // 게시물 태그
}

/**
 * ------------ Post 페이지 내에서 저장된 Post의 리스트들을 보여주는 게시판 --------------------
 */
const BlogPostTable = ({ posts }: { posts: Array<PostProps> }) => {
  const router = useRouter();

  const [postsData, setPostsData] = useRecoilState<PostProps[]>(postsState); // posts 배열 데이터를 담을 recoilState 선언

  // useEffect(() => {
  //   posts = posts === undefined || null || [] ? (posts = postsData) : posts;
  // }, []);

  console.log(posts);

  return (
    <TableContainer component={Paper} sx={{ mt: "2rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="blog-post-table">
        {/* --------------------Table 헤드------------------- */}
        <TableHead sx={{ backgroundColor: "#8d8484" }}>
          <TableRow>
            <C_TableCell align="center" width="150px">
              Slug
            </C_TableCell>
            <C_TableCell align="center">제목</C_TableCell>
            <C_TableCell align="center" width="100px">
              글쓴이
            </C_TableCell>
            <C_TableCell align="center" width="175px">
              등록일
            </C_TableCell>
            <C_TableCell align="center" width="90px">
              태그
            </C_TableCell>
          </TableRow>
        </TableHead>
        {/* ------------Table 바디----------------- */}
        <TableBody>
          {posts &&
            posts.map((post) => (
              <C_TableRow
                key={post.slug}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ color: "#ada3a3" }}
                  onClick={() => {
                    router.push(`post/${post.slug}`);
                  }}
                >
                  {post.slug}
                </TableCell>
                <BtnTableCell
                  onClick={() => {
                    router.push(`post/${post.slug}`);
                  }}
                >
                  {post.title}
                </BtnTableCell>
                <TableCell>
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt={post.author.name}
                        src={post.author.image}
                        sx={{ width: 50, height: 50 }}
                      />
                    }
                    variant="outlined"
                    label={post.author.name}
                  />
                </TableCell>
                <TableCell sx={{ color: "#ada3a3" }}>
                  {moment(post.createdAt).format("YYYY-MM-DD LT")}
                </TableCell>
                <TableCell>
                  <Chip label={post.tag.title} />
                </TableCell>
              </C_TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BlogPostTable;

const C_TableCell = styled(TableCell)`
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
`;

const C_TableRow = styled(TableRow)`
  &:hover {
    background-color: #ece7e7;
  }
`;

const BtnTableCell = styled(TableCell)`
  &:hover {
    cursor: pointer;
  }
`;
