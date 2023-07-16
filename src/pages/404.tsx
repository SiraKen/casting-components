import * as React from "react";
import Layout from "../layouts/Layout";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Layout>
      <Container>
        <div className="tw-grid tw-place-items-center tw-h-screen">
          <div className="tw-text-center">
            <h1 className="tw-text-3xl tw-font-bold">404</h1>
            <p>Component Not Found</p>
            <Button primary as={Link} to="/">
              Home
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export { Page404 };
