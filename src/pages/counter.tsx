import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../layouts/default";
import { Helmet } from "react-helmet";
import { Button, ButtonGroup, Container, Grid } from "@mui/material";

const Font = process.env.REACT_APP_COUNTER_FONT;
const Weight = process.env.REACT_APP_COUNTER_WEIGHT;

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

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <Layout>
        <Container>
          <CounterText id="counter">{count}</CounterText>

          <Grid container spacing={3} mt={50}>
            <Grid item>
              <ButtonGroup variant="contained">
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
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Button variant="contained" component={Link} to="/">
                Home
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
