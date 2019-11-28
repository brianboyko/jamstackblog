import * as React from "react";

const blueGradient = `/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#6db3f2+0,54a3ee+50,3690f0+51,1e69de+100;Blue+Gloss+%233 */
background: rgb(109,179,242); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(109,179,242,1) 0%, rgba(84,163,238,1) 50%, rgba(54,144,240,1) 51%, rgba(30,105,222,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(109,179,242,1) 0%,rgba(84,163,238,1) 50%,rgba(54,144,240,1) 51%,rgba(30,105,222,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(109,179,242,1) 0%,rgba(84,163,238,1) 50%,rgba(54,144,240,1) 51%,rgba(30,105,222,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6db3f2', endColorstr='#1e69de',GradientType=0 ); /* IE6-9 */
`;

interface ImageBlockProps {
  src: string;
}
const ImageBlock: React.FC<ImageBlockProps> = ({ src }) => {
  return (
    <div className={"image-container"}>
      <a href={src} target="_blank">
        <img src={src} />
      </a>
      <style jsx>
        {`
          .image-container {
            padding: 20px;
            ${blueGradient}
          }
          img {
            width: 100%;
            object-fit: contain;
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 4px 4px 4px black;
          }
        `}
      </style>
    </div>
  );
};
export default ImageBlock;
