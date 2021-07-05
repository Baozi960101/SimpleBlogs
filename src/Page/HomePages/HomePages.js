import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../../WebAPI";

const PostTitle = styled(Link)`
  font-size: 24px;
  color: black;
  text-decoration: none;
`;

const PostTime = styled.div`
  color: rgba(0, 0, 0, 0.2);
`;

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

function Post({ posts }) {
  return (
    <PostContainer>
      <PostTitle to={`/post/${posts.id}`}>{posts.title}</PostTitle>
      <PostTime>{new Date(posts.createdAt).toLocaleString()}</PostTime>
    </PostContainer>
  );
}

export default function HomePages() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <Root>
      {posts.map((data) => (
        <Post posts={data} />
      ))}
    </Root>
  );
}
