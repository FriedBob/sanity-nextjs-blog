import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { _Stack } from "./styles";

/**
 *  posts.find로 추려진 mainPost 관련 정보가 들어올 곳
 *  */
interface MainPostProps {
  title: string; // 글 제목
  author: { name: string; image: string; role: string }; // 작성자 정보
  createdAt: string; // 작성날자 YYYY-MM-DDT00:00:00.0000Z 형식
  slug: string; // url 상의 pathname 고유 식별이름
  subtitle: string;
  tag: { slug: string; title: string };
  thumbnail: { alt: string; imageUrl: string };

  content: Object[]; // 게시글에 작성된 글의 각 속성들
}

const BlogMainPost = ({
  title,
  slug,
  thumbnail,
  subtitle,
  author,
  createdAt,
}: MainPostProps) => {
  return (
    <_Stack>
      <Link href={`/post/${slug}`}>
        <Card sx={{ width: "80%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={thumbnail.imageUrl}
              alt="mainpost-thumbnail-imageUrl"
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "600", mt: "0.3rem" }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ mt: "0.8rem" }}>
                {subtitle}
              </Typography>
              <div
                style={{
                  marginTop: "0.3rem",
                  color: "#a19e9e",
                }}
              >
                {author.name} -{" "}
                {moment(createdAt).format("YYYY년 MM월 DD일 LT")}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </_Stack>
  );
};

export default BlogMainPost;
