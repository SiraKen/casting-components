import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../layouts/default";

const Font = process.env.REACT_APP_COUNTER_FONT;
const Weight = process.env.REACT_APP_COUNTER_WEIGHT;

const CtrlPanel = styled.div`
  border-top: solid 1px #ccc;
  margin: 200px 0 0 0;
`;

const CounterText = styled.h1`
  font-size: 5rem;
  font-weight: ${Weight !== "" && Weight !== undefined ? Weight : "bold"};
  font-family: ${Font !== "" && Font !== undefined
    ? Font
    : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"};
  margin: 0;

  &::after {
    content: "回";
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 0.5rem;
  margin: 5px;
  border: none;
  outline: none !important;
`;

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <CounterText id="counter">{count}</CounterText>
      <CtrlPanel>
        <Button
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          Count Up
        </Button>
        <Button
          onClick={(e) => {
            setCount(count !== 0 ? count - 1 : count);
          }}
        >
          Count Down
        </Button>
      </CtrlPanel>
    </Layout>
  );
}
