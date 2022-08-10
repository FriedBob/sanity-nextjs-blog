import React from "react";
import moment from "moment";
import { Chip, Divider, Stack, Typography } from "@mui/material";

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

/**
 *  ----------------- 블로그 포스트 제목 파트 ----------------
 */
const BlogPostTitle = ({ author, createdAt, title, tag }: PostProps) => {
  const createdDateTime = moment(createdAt).format("YYYY년 MM월 DD일  LT");

  const tagType = typeof tag;
  console.log(author);

  return (
    <Stack sx={{ mt: "2.5rem", mb: "5rem" }}>
      <div>
        {tag && tagType === "object" && <Chip label={Object(tag).title} />}
      </div>
      <div>
        <Typography variant="h2" sx={{ mt: "1rem", fontWeight: "700" }}>
          {title}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" sx={{ color: "#a7a2a2", mt: "0.8rem" }}>
          {`by ${author.name} • ${createdDateTime}`}
        </Typography>
      </div>
      <Divider sx={{ mt: "2.5rem" }} />
    </Stack>
  );
};

export default BlogPostTitle;
