import * as React from "react";

import Image from "./Image";

interface Props {
  items: {
    id: number;
    linkUrl: string;
    imageUrl: string;
    imageWidth?: string;
    imageHeight?: string;
    centered?: boolean;
  }[];
}

function ImageGrid({ items }: Props) {
  return <div style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
    {items.map((item) => <Image key={item.id} {...item} />)}
  </div>;
}

export default ImageGrid;