import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";

// 이미지 갤러리 자체 프롭
interface ImageListProps {
  caption: string; // imageGallery의 최상단 이름
  images: Array<ImageProps>; // imageGallery의 내부 이미지들
  _key: string;
  _type: string;
}

// image 1개의 자체 프롭들
interface ImageProps {
  alt: string;
  url: string; // 이미지 절대경로(주소)
  _key: string; // 고유값
  _type: string; // "image"
  asset: { _ref: string }; // 이미지 참조주소
}

/**
 * -------------- ImageGallery 내부 로직 구현 -----------------------
 */
const ImageGallery = ({ images, caption }: ImageListProps) => {
  console.log(images);

  return (
    <ImageList sx={{ width: "500px", height: "450px" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          sx={{
            "&.MuiListSubheader-root": {
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "white",
              backgroundColor: "#333332",
              borderRadius: "8px",
            },
          }}
        >
          {caption}
        </ListSubheader>
      </ImageListItem>
      {images &&
        images.map((image) => (
          <ImageListItem key={image._key}>
            <img
              src={`${image.url}?w=248&fit=crop&auto=format`}
              srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.alt}
              loading="lazy"
              style={{ borderRadius: "15px" }}
            />
            <ImageListItemBar
              title={image.alt}
              sx={{
                borderEndStartRadius: "15px",
                borderEndEndRadius: "15px",
                "& .MuiImageListItemBar-title": {
                  fontSize: "1rem",
                  textAlign: "center",
                },
              }}
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};

export default ImageGallery;
