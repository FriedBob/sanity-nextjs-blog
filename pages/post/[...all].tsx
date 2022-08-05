import { useRouter } from "next/router";

const PostAll = () => {
  const router = useRouter();

  return (
    <div>
      <h1>PostAll</h1>
      <h1>Name : {router.query.all}</h1>
    </div>
  );
};

export default PostAll;
