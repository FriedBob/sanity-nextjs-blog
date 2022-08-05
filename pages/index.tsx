import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";

interface Props {
  hello: string;
}

const Home: NextPage<Props> = ({ hello }: Props) => {
  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
      <h1>{hello}</h1>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  // Sanity 로부터 데이터를 가져옴
  return {
    props: {
      hello: "world",
    },
  };
};
