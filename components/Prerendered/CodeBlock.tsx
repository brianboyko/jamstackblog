import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const getCodeLanguage = (className: string): string => {
  const langs: string[] = className
    .split(" ")
    .filter((c: string) => c.substring(0, 9) === "language-");
  if (langs.length === 0) {
    return "markdown";
  }
  return langs[0].replace("language-", "");
};

const getCodeStyle = (language: string): string => {
  if (["typescript", "tsx"].includes(language)) {
    return `
    color: white;
    background-color: #294E80;
    `;
  }
  if (["javascript", "es6"].includes(language)) {
    return `
    color: black;
    background-color: #f7e018;`;
  }
  return `
  color: white;
  background-color: black`;
};

interface CodeBlockProps {
  value: string;
  languageClass?: string;
}
const CodeBlock: React.FC<CodeBlockProps> = ({
  value,
  languageClass = "language-markdown"
}) => {
  const language = getCodeLanguage(languageClass);
  return (
    <React.Fragment>
      <div className="language-flexbox">
        {language !== "markdown" && <div className="language">{language}</div>}
      </div>
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
      <style jsx>{`
        .language-flexbox {
          display: flex;
          transform: translateY(10px);
        }
        .language {
          display: flex;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          padding: 10px;
          font-size: 16px;
          border: 1px solid black;
          ${getCodeStyle(language)}
        }
      `}</style>
    </React.Fragment>
  );
};
export default CodeBlock;
