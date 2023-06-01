import React from "react";
import * as S from "./styles";

interface PropTypes {
  children?: React.ReactNode;
  colorDark?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "big" | "huge";
  uppercase?: boolean;
}

export function Heading({
  children,
  colorDark = true,
  as = "h1",
  size = "big",
  uppercase = false,
}: PropTypes) {
  return (
    <S.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </S.Title>
  );
}
