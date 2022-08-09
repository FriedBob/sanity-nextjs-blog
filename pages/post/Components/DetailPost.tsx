import React, { ReactPropTypes, useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import { Card, Stack } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import SyntaxHighlighter from "react-syntax-highlighter";
import LinkCard from "./LinkCard";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import SanityService from "../../../services/SanityService";
import ImageGallery from "./ImageGallery";

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
  // console.log(blocks);

  useEffect(() => {
    const sanityService = new SanityService();
    const builder = imageUrlBuilder(sanityService._client);

    function urlFor(source: string) {
      return builder.image(source);
    }

    setSerializers({
      types: {
        /* ----------Code Contents-------------- */
        code: ({ node }: any) => {
          const { code } = node;
          return (
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
          );
        },
        video: ({ node }: any) => {
          const { metadata } = node;

          /* ----------Video Contents-------------- */
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
        /* ----------Link Contents-------------- */
        link: ({ node }: any) => {
          const { metadata } = node;

          // Custom Component
          return <LinkCard {...metadata} />;
        },
        /* ----------Image Contents-------------- */
        image: ({ node }: any) => {
          const { alt, asset, caption } = node;
          // console.log(urlFor(asset._ref).auto("format").width(720).toString());
          const imgUrl = urlFor(asset._ref)
            .auto("format")
            .width(720)
            .toString();

          return <img src={imgUrl} alt={alt} />;
        },
        /* ----------ImageGallery Contents-------------- */
        imageGallery: ({ node }: any) => {
          console.log(node);

          return <ImageGallery {...node} />;
          // return <p>imageGallery</p>;
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
