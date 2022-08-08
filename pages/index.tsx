import type { GetStaticProps, NextPage } from "next";
import SanityService from "../services/SanityService";
import { sanityQuery } from "../services/queries";
import * as S from "./styles";
import Header from "./Components/Header";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import Headline from "./Components/Headline";

interface Props {
  home: any;
  posts: any;
}

const Home: NextPage<Props> = ({ home, posts }: Props) => {
  const router = useRouter();

  // Home에서 mainPost의 mainPostUrl과 post들의 정보를 담은 정보에서 slug url이 같은 post 요소를 반환
  const mainPost = posts.find((post: any) => post.slug === home.mainPostUrl);
  // Home에서 " 가 다른 포스트들의 정보만 골라내는것, mainPost의 반대
  const otherPosts = posts.filter(
    (post: any) => post.slug !== home.mainPostUrl
  );

  console.log(mainPost);

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <S.Container>
      <Header handleHomeClick={handleHomeClick} />
      <Divider />
      <Headline />
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Sanity 로부터 데이터를 가져옴

  // // API 요청 일시잠금
  // const homeQuery = sanityQuery.homeQuery;
  // const mainPostUrlQuery = sanityQuery.mainPostUrlQuery;

  // const sanityService = new SanityService();
  // const home = await sanityService.getHome();
  // const posts = await sanityService.getPosts();
  const home = {};
  const posts = {};

  return {
    props: {
      home,
      posts,
    },
  };
};
