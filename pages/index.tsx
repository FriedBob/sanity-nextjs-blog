import type { GetStaticProps, NextPage } from "next";
import SanityService from "../services/SanityService";
import { sanityQuery } from "../services/queries";
import * as S from "../Components/PageComponents/styles";
import Header from "../Components/PageComponents/Header";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import Headline from "../Components/PageComponents/Headline";
import BlogMainPost from "../Components/PageComponents/BlogMainPost";
import Footer from "../Components/PageComponents/Footer";
import BlogList, {
  otherPostProps,
} from "../Components/PageComponents/BlogList";
import { useRecoilState } from "recoil";
import { PostProps, postsState } from "../Components/states/dataStore";
import { useEffect } from "react";

interface Props {
  home: any;
  posts: any;
}

const Home: NextPage<Props> = ({ home, posts }: Props) => {
  const router = useRouter();
  const [postsData, setPostsData] = useRecoilState<PostProps[]>(postsState); // posts 배열 데이터를 담을 recoilState 선언

  useEffect(() => {
    setPostsData(posts);
  }, []);

  console.log(postsData);

  // Home에서 mainPost의 mainPostUrl과 post들의 정보를 담은 정보에서 slug url이 같은 post 요소를 반환
  const mainPost = posts.find((post: any) => post.slug === home.mainPostUrl);
  // Home에서 " 가 다른 포스트들의 정보만 골라내는것, mainPost의 반대

  const otherPosts: any = posts.filter(
    (post: any) => post.slug !== home.mainPostUrl
  );

  // console.log(mainPost);
  // console.log(posts);

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <S.Container>
      <Header posts={posts} handleHomeClick={handleHomeClick} />
      <Divider />
      <Headline />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Divider sx={{ mt: "5rem" }} />
      <Footer />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Sanity 로부터 데이터를 가져옴

  // API 요청 일시잠금
  const homeQuery = sanityQuery.homeQuery;
  const mainPostUrlQuery = sanityQuery.mainPostUrlQuery;

  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();
  // const home = {};
  // const posts = {};

  return {
    props: {
      home,
      posts,
    },
  };
};
