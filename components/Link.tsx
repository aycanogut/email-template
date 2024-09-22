import * as React from "react";

import { Link as LinkComponent } from "@react-email/components";

interface Props {
  url: string;
  title: string;
  centered?: boolean;
}

function Link({ url, title, centered = false }: Props) {
  return <LinkComponent
    href={url}
    target="_blank"
    style={{
      ...link,
      display: "block",
      textAlign: centered ? "center" : "left",
      marginBlock: 24
    }}
  >
    {title}
  </LinkComponent>
}

export default Link;

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};