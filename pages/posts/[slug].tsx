import * as React from "react";
import { getPostBySlug } from "../../api/posts";
import withInitialProps from "../../connectors/withInitialProps";
import Prerendered from "../../components/Prerendered";
import pick from "lodash/pick";
import * as dateFormatter from "date-fns";
import Header from "../../components/Meta/Header";
const blueGradient = `/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#6db3f2+0,54a3ee+50,3690f0+51,1e69de+100;Blue+Gloss+%233 */
background: rgb(109,179,242); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(109,179,242,1) 0%, rgba(84,163,238,1) 50%, rgba(54,144,240,1) 51%, rgba(30,105,222,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(109,179,242,1) 0%,rgba(84,163,238,1) 50%,rgba(54,144,240,1) 51%,rgba(30,105,222,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(109,179,242,1) 0%,rgba(84,163,238,1) 50%,rgba(54,144,240,1) 51%,rgba(30,105,222,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6db3f2', endColorstr='#1e69de',GradientType=0 ); /* IE6-9 */
`;

// PostPage page component
const PostPage = ({ title, html, excerpt, published_at, feature_image }) => {
  // Render post title and content in the page from props
  return (
    <React.Fragment>
      <Header title={title} />
      <div className="header-area">
        <div className="published-date">
          {dateFormatter.format(new Date(published_at), "do MMM yyyy")}
        </div>
        <h1 className="title">{title}</h1>

        <div className="excerpt">{excerpt}</div>
      </div>
      {feature_image && <img className="featured-image" src={feature_image} />}
      <div className="container">
        <Prerendered htmlString={html} />
      </div>
      <style jsx>{`
        .header-area {
          padding: 20px;
          font-size: 16px;
          ${blueGradient}
        }
        .featured-image {
          margin: 4px 0px 0px 0px;
          padding: 0px 0px 10px 0px;
          width: 100%;
          object-fit: contain;
        }
        .header-area img {
          max-width: 33%;
          margin-right: 5%;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 4px 4px 4px black;
        }
        .excerpt {
          color: white;
          text-shadow: 1px 1px black;
          font-size: 30px;
          font-family: "IBM Plex Sans", sans-serif;
        }
        .container {
          font-family: "Merriweather", sans-serif;
          font-size: 1rem;
          margin: 50px;
          line-height: 1.75rem;
        }
        h1,
        h2,
        h3,
        h4,
        h4,
        h5,
        h6,
        .published-date {
          font-family: "IBM Plex Sans", sans-serif;
        }
        .published-date {
          font-size: 22px;
          text-shadow: 1px 1px black;
          color: white;
        }
        .title {
          font-size: 60px;
          text-shadow: 1px 1px black;
          color: white;
        }
      `}</style>
    </React.Fragment>
  );
};

const mapInitialProps = async (params: any) => {
  const post = await getPostBySlug(params.query.slug);
  return pick(post, [
    "title",
    "html",
    "excerpt",
    "published_at",
    "feature_image"
  ]);
};

export default withInitialProps(mapInitialProps)(PostPage);
