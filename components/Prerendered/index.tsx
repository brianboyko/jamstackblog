import * as React from "react";
import { Fragment } from "react";
import get from "lodash/get";

import parser, { DomElement } from "html-react-parser";

/* We can use the second parameter of the parser if we need to do any React replacements */

import CodeBlock from "./CodeBlock";
import ImageBlock from "./ImageBlock";

const Preformatted = ({ htmlString }: { htmlString: string }) => {
  return (
    <Fragment>
      {parser(htmlString, {
        replace: (node: DomElement) => {
          if (node.type === "tag" && node.name === "code") {
            return (
              <CodeBlock
                languageClass={get(node, "attribs.class", "language-markdown")}
                value={get(node, ["children", 0, "data"])}
              />
            );
          }
          if (node.type === "tag" && node.name === "img") {
            return <ImageBlock src={get(node, "attribs.src")} />;
          }
          return node;
        }
      })}
    </Fragment>
  );
};

export default Preformatted;
