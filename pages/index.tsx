import type { GetStaticProps, NextPage } from "next";
import sanityClient from "@sanity/client";
import styles from "../styles/Home.module.css";
import { sanityQuery } from "../queries";

interface Props {
  home: any;
  posts: any;
}

const Home: NextPage<Props> = ({ home, posts }: Props) => {
  console.log(home);
  console.log(posts);

  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Sanity 로부터 데이터를 가져옴
  const client = sanityClient({
    dataset: "production",
    projectId: "fty5c0wl",
    useCdn: process.env.NODE_ENV === "production",
  });

  const homeQuery = sanityQuery.homeQuery;
  const mainPostUrlQuery = sanityQuery.mainPostUrlQuery;

  const home = await client.fetch(mainPostUrlQuery);
  const posts = await client.fetch(homeQuery);

  return {
    props: {
      home,
      posts,
    },
  };
};
