import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  src: string;
}

export default function Figure({ children, src }: Props) {
  return (
    <figure style={{ textAlign: "center" }}>
      <img src={src} />
      <figcaption style={{ color: "gray", fontSize: "small" }}>
        {children}
      </figcaption>
    </figure>
  );
}
