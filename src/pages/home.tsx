import * as React from "react";
import { Link, redirect } from "react-router-dom";
import { Button, Container, Icon, SemanticICONS } from "semantic-ui-react";
import Layout from "../layouts/Layout";

const Home = () => {
  const actions: {
    name: string;
    url: string;
    icon?: SemanticICONS;
  }[] = [
    {
      name: "Clock",
      url: "clock",
      icon: "clock",
    },
    {
      name: "Counter",
      url: "counter",
      icon: "plus",
    },
  ];
  return (
    <Layout>
      <Container>
        <div className="tw-grid">
          <h1>Casting Components</h1>
          <div>
            {actions.map((action, i) => (
              <Button
                key={i}
                icon
                labelPosition="left"
                as={Link}
                to={action.url}
                primary
              >
                <Icon name={action.icon} /> {action.name}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export { Home };
