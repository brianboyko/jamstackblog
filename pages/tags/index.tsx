import * as React from "react";
import { getTagList } from "../../api/tags/";
import withInitialProps from "../../connectors/withInitialProps";

const Home = ({ tagList }) => (
  <div>
    <div>
      {tagList.map((tag: any) => (
        <p>
          tagName: {tag.name}, tagSlug: {tag.slug}
        </p>
      ))}
    </div>
  </div>
);

const mapInitialProps = async () => {
  const tagList = await getTagList();
  return { tagList };
};
export default withInitialProps(mapInitialProps)(Home);
