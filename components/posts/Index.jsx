import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import Post from '../Post/Index';

const fetcher = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  return await axios
    .get(url)
    .then((res) => {
      console.log('response', res);
      return res.data;
    })
    .catch((err) => {
      const error = new Error('An error occurred while fetching the data.');
      // Attach extra info to the error object.
      error.info = err;
      error.status = err.status;
      throw error;
    });
};

const Posts = ({ initialPost }) => {
  console.log('inital', initialPost);
  const { data, error } = useSWR('/api/data/posts', fetcher, {
    initialData: initialPost,
    shouldRetryOnError: false,
  });

  if (error) {
    return <>{error?.message}</>;
  }
  if (!data) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className={`posts py-5`}>
        {data.slice(0, 10)?.map((post) => {
          return <Post key={post?.id} post={post} />;
        })}
      </div>
    </>
  );
};

Posts.getInitialProps = async (ctx) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const data = response.data;
  return {
    initialPost: data.slice(0, 3),
  };
};

export default Posts;
