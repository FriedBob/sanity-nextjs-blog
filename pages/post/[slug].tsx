import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { sanityQuery } from "../../services/queries";
import SanityService from "../../services/SanityService";

interface Props extends ParsedUrlQuery {
  slug: string;
  post: any;
}

const PostAll = ({ slug, post }: Props) => {
  console.log(post);

  return (
    <div>
      <h1>PostAll</h1>
      <h1>Name : {slug}</h1>
    </div>
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
