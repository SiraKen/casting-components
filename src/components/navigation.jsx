import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationList = styled.ul`
  background: #007ca5;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;

  li {
    margin: 0;

    a {
      color: #fff;
      display: block;
      padding: .75rem 1.25rem;
      text-decoration: none;
      border-left: solid 1px #006385;

      &:hover {
        background: #006385;
      }
    }

    &:last-child a {
      border-right: solid 1px #006385;
    }
  }
`

const Navigation = () => {
  return (
    <>
      <NavigationList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/">Link</Link>
        </li>
      </NavigationList>
    </>
  )
}

export default Navigation
