// ------------------- useRecoilState 를 사용하는 전역 data값 저장소 ----------------------

import { atom } from "recoil";

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

// Post들을 담고있는 배열 state
export const postsState = atom<Array<PostProps>>({
  key: "posts",

  default: [],
});
