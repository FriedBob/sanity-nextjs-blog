import type { GetStaticProps, NextPage } from "next";
import SanityService from "../services/SanityService";
import { sanityQuery } from "../services/queries";
import * as S from "./styles";

interface Props {
  home: any;
  posts: any;
}

const Home: NextPage<Props> = ({ home, posts }: Props) => {
  // 쿼리문 출력 확인용
  // console.log(home);
  // console.log(posts);

  // Home에서 mainPost의 mainPostUrl과 post들의 정보를 담은 정보에서 slug url이 같은 post 요소를 반환
  const mainPost = posts.find((post: any) => post.slug === home.mainPostUrl);
  // Home에서 " 가 다른 포스트들의 정보만 골라내는것, mainPost의 반대
  const otherPosts = posts.filter(
    (post: any) => post.slug !== home.mainPostUrl
  );

  console.log(mainPost);

  return (
    <S.Container>
      <h1>Blog Home</h1>
    </S.Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Sanity 로부터 데이터를 가져옴

  const homeQuery = sanityQuery.homeQuery;
  const mainPostUrlQuery = sanityQuery.mainPostUrlQuery;

  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
};
