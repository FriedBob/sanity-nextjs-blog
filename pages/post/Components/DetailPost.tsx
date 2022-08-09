import React, { ReactPropTypes } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";

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
  return <></>;
};

export default DetailPost;
