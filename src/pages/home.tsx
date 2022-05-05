import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/default";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { HourglassBottom, Alarm } from "@mui/icons-material";

type Actions = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export default function Home() {
  const actions: Array<Actions> = [
    {
      name: "Clock",
      url: "clock",
      icon: <Alarm />,
    },
    {
      name: "Counter",
      url: "counter",
      icon: <HourglassBottom />,
    },
  ];
  return (
    <Layout>
      <Container>
        <Typography variant="h5">Home</Typography>
        <List>
          {actions.map((action, i) => (
            <ListItem key={i}>
              <ListItemButton component={Link} to={action.url}>
                <ListItemIcon>{action.icon}</ListItemIcon>
                <ListItemText primary={action.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
}
