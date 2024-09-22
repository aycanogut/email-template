import * as React from "react";

import { Heading } from "@react-email/components";

interface Props {
  title: string;
  centered?: false;
}

function Header({ title, centered = false }: Props) {
  return <Heading style={{
    ...text,
    textAlign: centered ? "center" : "left",
    color: "#000",
    marginBlock: 24
  }}
  >
    {title}
  </Heading>;
}

export default Header;

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};