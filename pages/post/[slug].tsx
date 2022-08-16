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

const prefix =
  process.env.NODE_ENV === "production" ? "sanity-nextjs-blog" : "";

interface Props extends ParsedUrlQuery {
  slug: string;
  post: any;
}

/**
 * ----------- Post 정보 표시 페이지 ----------------------
 *
 */
const PostAll = ({ slug, post }: Props) => {
  const router = useRouter();
  const [postsData, setPostsData] = useRecoilState<PostProps[]>(postsState); // posts 배열 데이터를 담을 recoilState 선언

  const handleHomeClick = () => {
    router.push(`${prefix}/`);
  };

  return (
    <S.Container>
      <Header handleHomeClick={handleHomeClick} posts={postsData} />
      <Divider />
      {/* <BlogMainPost {...post} /> */}
      <BlogPostTitle {...post} />
      <DetailPost blocks={post.content} />
      <Divider sx={{ mt: "5rem" }} />
      <Footer />
    </S.Container>
  );
};

export default PostAll;

export const getStaticPaths: GetStaticPaths = async () => {
  // Sanity 로부터 데이터를 가져옴
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();

  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug }: any = context.params;

  // Sanity 로부터 데이터를 가져옴
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();

  const post = posts.find((p: any) => p.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
};
