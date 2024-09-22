import * as React from "react";

import { Text as TextComponent } from "@react-email/components";

interface Props {
  textContent: string
}

function Text({ textContent }: Props) {
  return <TextComponent
    style={{
      ...text,
      color: "#ababab",
      marginTop: "14px",
      marginBottom: "16px",
    }}
  >
    {textContent}
  </TextComponent>
}

export default Text;

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};