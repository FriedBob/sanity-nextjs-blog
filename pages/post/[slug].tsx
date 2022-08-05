import { useRouter } from "next/router";

const PostAll = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <h1>PostAll</h1>
      <h1>Name : {slug}</h1>
    </div>
  );
};

export default PostAll;
