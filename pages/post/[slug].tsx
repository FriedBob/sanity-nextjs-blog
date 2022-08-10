import { Divider } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { sanityQuery } from "../../services/queries";
import SanityService from "../../services/SanityService";
import BlogMainPost from "../Components/BlogMainPost";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import * as S from "./Components/styles";
import DetailPost from "./Components/DetailPost";
import BlogPostTitle from "./Components/BlogPostTitle";

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

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <S.Container>
      <Header handleHomeClick={handleHomeClick} />
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
