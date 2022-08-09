import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

// metadata의 내용물들
interface MetadataProps {
  crawledAt: string;
  meta: { description: string; title: string };
  openGraph: {
    description: string;
    image: string;
    imageAlt: string;
    imageHeight: number;
    imageWidth: number;
    imageType: string;
    siteName: string;
    title: string;
    type: string;
    url: string;
  };
  url: string;
  _type: string;
}

/**
 * Post 의 content의 blockcontent 중 Link 내용물
 */
const LinkCard = ({ openGraph }: MetadataProps) => {
  const { image, imageAlt, title, description, siteName, url } = openGraph;

  return (
    <Card sx={{ maxWidth: "345px" }}>
      <CardActionArea href={url} target="_blank">
        <CardMedia component="img" height="140" image={image} alt={imageAlt} />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "600", mb: "0.5rem" }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ mb: "0.3rem" }}>
            {url}
          </Typography>
          <Typography variant="body2" sx={{ color: "#8f8888" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LinkCard;
