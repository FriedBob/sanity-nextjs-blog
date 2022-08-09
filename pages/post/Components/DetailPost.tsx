import React, { ReactPropTypes } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Stack } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxStyle from "./syntaxStyle";

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

const serializers = {
  types: {
    code: ({ node }: any) => {
      const { code } = node;
      return (
        <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
      );
    },
    video: ({ node }: any) => {
      return <p>video</p>;
    },
    link: ({ node }: any) => {
      return <p>link</p>;
    },
    imageGallery: ({ node }: any) => {
      return <p>imageGallery</p>;
    },
  },
};
/**
 * Post의 Content 내용물
 *
 */
const DetailPost = ({ blocks }: Content) => {
  return (
    <div>
      <Stack>
        <SanityBlockContent
          blocks={blocks}
          projectId="fty5c0wl"
          dataset="prodcution"
          serializers={serializers}
        />
      </Stack>
    </div>
  );
};

export default DetailPost;
