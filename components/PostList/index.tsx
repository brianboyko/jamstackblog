import * as React from "react";
import Header from "../Meta/Header";
import { getAllPosts } from "../../api/posts";
import withInitialProps from "../../connectors/withInitialProps";
import Link from "next/Link";

const PostList: React.FC<{ postList: any }> = ({ postList }) => (
  <div>
    {Array.isArray(postList) &&
      postList.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>{" "}
          - {post.primary_author.name}
          <p>Published: {post.published_at}</p>
          <p>{post.excerpt}</p>
          {post.feature_image && (
            <img width="100" height="auto" src={post.feature_image} />
          )}
          <hr />
        </div>
      ))}
  </div>
);

export default PostList;
