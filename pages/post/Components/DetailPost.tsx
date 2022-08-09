import React, { ReactPropTypes, useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Stack } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import SyntaxHighlighter from "react-syntax-highlighter";

interface Content {
  blocks: Array<ContentProps>;
}
interface ContentProps {
  _key: string;
  _type: string;
  children: Array<any>;
  style: string;
  markDefs: Array<any>;
}

/**
 * Post의 Content 내용물
 *
 */
const DetailPost = ({ blocks }: Content) => {
  const [serializers, setSerializers] = useState({ types: {} });

  useEffect(() => {
    setSerializers({
      types: {
        code: ({ node }: any) => {
          const { code } = node;
          return (
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
          );
        },
        video: ({ node }: any) => {
          const { metadata } = node;
          // console.log(node);

          return (
            <div className="plater-wrapper">
              <ReactPlayer
                className="react-player"
                url={metadata.url}
                controls={true}
              />
            </div>
          );
        },
        link: ({ node }: any) => {
          return <p>link</p>;
        },
        imageGallery: ({ node }: any) => {
          return <p>imageGallery</p>;
        },
      },
    });
  }, []);

  return (
    <Stack>
      <SanityBlockContent
        blocks={blocks}
        projectId="fty5c0wl"
        dataset="prodcution"
        serializers={serializers}
      />
    </Stack>
  );
};

export default DetailPost;
