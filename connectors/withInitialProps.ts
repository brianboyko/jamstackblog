import * as React from "react";

export type GetInitialPropsFunc = (...params: any[]) => Promise<any>;

export const withInitialProps = (mapInitialProps: GetInitialPropsFunc) => (
  Component: React.FC<any>
) => {
  return Object.assign(Component, { getInitialProps: mapInitialProps });
};

export default withInitialProps;
