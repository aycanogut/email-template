import * as React from "react";

import { Img, Link } from "@react-email/components";

interface Props {
  linkUrl: string;
  imageUrl: string;
  imageWidth?: string;
  imageHeight?: string;
  centered?: boolean;
}

function Image({ linkUrl, imageUrl, imageWidth, imageHeight, centered = false }: Props) {
  return <Link
    href={linkUrl}
    target="_blank"
    style={{
      ...link,
      display: "flex",
      justifyContent: centered ? "center" : "flex-start",
      marginBlock: 24
    }}
  >
    <Img
      src={imageUrl}
      width={imageWidth || "100%"}
      height={imageHeight || "auto"}
    />
  </Link>
}

export default Image;

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};
