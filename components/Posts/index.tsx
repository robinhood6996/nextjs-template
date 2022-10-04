import { useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <h1>All Posts</h1>
    </>
  );
};

export const getServerSideProps = async () => {};

export default Posts;
