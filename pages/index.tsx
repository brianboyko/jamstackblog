import * as React from "react";
import Header from "../components/Meta/Header";
import PostList from "../components/PostList";
import withInitialProps from "../connectors/withInitialProps";
import { getAllPosts } from "../api/posts";

const Home = ({ postList }) => (
  <div>
    <Header title={`Software Engineering Blog of Brian Boyko`} />
    <PostList postList={postList} />
  </div>
);

const mapInitialProps = async () => {
  const postList = await getAllPosts();
  return { postList };
};
export default withInitialProps(mapInitialProps)(Home);
