import { Divider } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { sanityQuery } from "../../services/queries";
import SanityService from "../../services/SanityService";
import BlogMainPost from "../../Components/PageComponents/BlogMainPost";
import Footer from "../../Components/PageComponents/Footer";
import Header from "../../Components/PageComponents/Header";
import * as S from "../../Components/PostComponents/styles";
import DetailPost from "../../Components/PostComponents/DetailPost";
import BlogPostTitle from "../../Components/PostComponents/BlogPostTitle";
import { useRecoilState } from "recoil";
import { PostProps, postsState } from "../../Components/states/dataStore";
import BlogPostTable from "../../Components/PostComponents/BlogPostTable";
import { prefix } from "../../config/config";

interface Props extends ParsedUrlQuery {
  slug: string;
  post: any;
}

/**
 * ----------- Post 목록들 표시해주는 페이지 ----------------------
 *
 */
const IndexPage = ({ slug, post }: Props) => {
  const router = useRouter();
  const [postsData, setPostsData] = useRecoilState<PostProps[]>(postsState); // posts 배열 데이터를 담을 recoilState 선언
  // const jsonPosts = router.query;
  // // const posts = JSON.parse(jsonPosts);
  // console.log(jsonPosts);

  console.log(postsData);

  const handleHomeClick = () => {
    router.push(`${prefix}/`);
  };

  return (
    <S.Container>
      <Header handleHomeClick={handleHomeClick} />
      <Divider />
      <BlogPostTable posts={postsData} />
      <Divider sx={{ mt: "5rem" }} />
      <Footer />
    </S.Container>
  );
};

export default IndexPage;

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
