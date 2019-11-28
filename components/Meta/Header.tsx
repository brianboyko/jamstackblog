import * as React from "react";
import { Fragment } from "react";
import Head from "next/head";
import "normalize.css";

const MetaHeader = ({ title }) => (
  <Head>
    <title key="title">FrontEndGineer.com - {title}</title>
    <link key="favicon" rel="icon" href="/favicon.ico" />
    <link
      href="//cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Merriweather&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default MetaHeader;
