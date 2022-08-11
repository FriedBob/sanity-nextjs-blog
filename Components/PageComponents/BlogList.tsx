import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { fontSize } from "@mui/system";
import { wrap } from "module";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { prefix } from "../../config/config";

// mainPost 이외의 otherPostProps들
export interface otherPostProps {
  title: string; // 글 제목
  author: { name: string; image: string; role: string }; // 작성자 정보
  createdAt: string; // 작성날자 YYYY-MM-DDT00:00:00.0000Z 형식
  slug: string; // url 상의 pathname 고유 식별이름
  subtitle: string;
  tag: { slug: string; title: string };
  thumbnail: { alt: string; imageUrl: string };

  content: Object[]; // 게시글에 작성된 글의 각 속성들
}

/**
 * MainPost 이외의 일반 포스트들의 Array를 출력
 *
 */
const BlogList = ({ posts }: { posts: Array<otherPostProps> }) => {
  // console.log(posts);

  const router = useRouter();

  return (
    <div>
      <Typography textAlign="center" variant="h4" sx={{ fontWeight: "600" }}>
        Recent Post
      </Typography>
      <Stack
        direction="row"
        spacing={5}
        sx={{
          minHeight: "450px",
          flexWrap: "wrap",
          flexShrink: "0",
          flexGrow: "0",
          alignItems: "center",
          alignContent: "space-between",
          justifyContent: "center",
          mb: "100px",
          mt: "50px",
        }}
      >
        {posts &&
          posts.map((post) => (
            <Card key={post.slug} sx={{ width: "200px" }}>
              {/* <CardActionArea href={`post/${post.slug}`}> href 를 쓸 경우 recoilState가 제대로 작동하지 않는듯함 */}
              <CardActionArea
                onClick={() => {
                  router.push(`${prefix}/post/${post.slug}`);
                }}
              >
                <CardMedia
                  component="img"
                  height="150px"
                  image={post.thumbnail.imageUrl}
                  alt={post.thumbnail.alt}
                />
                <CardContent
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    "&.MuiCardContent-root": { textOverflow: "ellipsis" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                      mt: "0.1rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      mt: "0.1rem",
                      fontSize: "0.7rem",
                      color: "#a19e9e",
                    }}
                  >
                    {`${post.author.name} - ${moment(post.createdAt).format(
                      "YYYY년 MM월 DD일"
                    )}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Stack>
    </div>
  );
};

export default BlogList;
