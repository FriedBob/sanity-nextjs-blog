import type { GetStaticProps, NextPage } from "next";
import SanityService from "../services/SanityService";
import styles from "../styles/Home.module.css";
import { sanityQuery } from "../services/queries";

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
