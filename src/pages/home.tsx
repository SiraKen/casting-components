import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/default";

export default function Home() {
  const actions = [
    {
      name: "Clock",
      url: "clock",
    },
    {
      name: "Counter",
      url: "counter",
    },
  ];
  return (
    <Layout>
      <h1>Home</h1>
      <ul>
        {actions.map((action) => (
          <li>
            <Link to={`/${action.url}`}>{action.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
