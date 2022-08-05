import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import sanityClient from "@sanity/client";
import { sanityQuery } from "../../queries";

interface Props {
  slug: string;
}

const PostAll = ({ slug }: Props) => {
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
  const client = sanityClient({
    dataset: "production",
    projectId: "fty5c0wl",
    useCdn: process.env.NODE_ENV === "production",
  });

  const homeQuery = sanityQuery.homeQuery;
  const posts = await client.fetch(homeQuery);

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  return {
    props: {
      slug,
    },
  };
};
