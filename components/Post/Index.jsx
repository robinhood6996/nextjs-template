import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Post = ({ post }) => {
  return (
    <div className={`postcard`}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">
            <Link href={``}>Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
