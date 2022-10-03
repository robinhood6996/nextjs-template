import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';

const SinglePost = ({ post }) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.body} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Single Post - {id}</h2>
      <div className={`postcard`}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const response = await axios.get(url);
  const { data } = response;
  return {
    props: {
      post: data,
    },
  };
};

export default SinglePost;
