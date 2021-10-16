import { React, useState } from "react";
import SEO from "../components/seo";
import styled from "styled-components";

const CtrlPanel = styled.div`
  border-top: solid 1px #ccc;
  margin: 200px 0 0 0;
`

const CounterText = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin: 0;

  &::after {
    content: '回';
  }
`

const Button = styled.button`
  background: #000;
  color: #fff;
  padding: .5rem;
  margin: 5px;
  border: none;
  outline: none !important;
`

const Counter = () => {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <SEO title="Counter"></SEO>
      <CounterText id="counter">{ count }</CounterText>
      <CtrlPanel>
        <Button onClick={ (e) => { setCount(count + 1) } }>Count Up</Button>
        <Button onClick={ (e) => { setCount(count !== 0 ? count - 1 : count) } }>Count Down</Button>
      </CtrlPanel>
    </>
  )
}

export default Counter
