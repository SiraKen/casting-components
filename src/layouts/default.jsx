import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          body {
            font-size: 16px;
          }
        `}
      />
      {children}
    </>
  );
}
