import * as React from "react";
import { getTaggedPosts } from "../../api/posts";
import withInitialProps from "../../connectors/withInitialProps";
import PostList from "../../components/PostList";

const ListOfTaggedPosts = ({ postList }) => (
  <div>
    <div>
      <PostList postList={postList} />
    </div>
  </div>
);

const mapInitialProps = async (params: any) => {
  const postList = await getTaggedPosts(params.query.tagslug);

  return { postList };
};

export default withInitialProps(mapInitialProps)(ListOfTaggedPosts);
