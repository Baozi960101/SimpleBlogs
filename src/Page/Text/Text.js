import styled from "styled-components";

const PostContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PostTitle = styled.div`
  font-size: 24px;
  color: black;
  text-decoration: none;
`;

const PostTime = styled.div`
  color: rgba(0, 0, 0, 0.2);
`;

export default function TextPost({ data }) {
  return (
    <>
      <PostContainer>
        <PostTitle>{data.title}</PostTitle>
        <PostTime>{new Date(data.createdAt).toLocaleString()}</PostTime>
      </PostContainer>
      <div>{data.body}</div>
    </>
  );
}
