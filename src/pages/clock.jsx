import { React, useState } from "react";
import { useParams } from "react-router";
import SEO from "../components/seo";
import styled from "styled-components";

const ClockText = styled.p`
  margin: 0;
  font-size: 3rem;
`

const Clock = () => {
  const [ time, setTime ] = useState('Loading');

  const { unit, delay } = useParams();

  const zeroFill = (num) => {
    return ('00' + num).slice(-2);
  }

  const countClock = () => {
    let now    = new Date();
    let hour   = zeroFill( now.getHours() );
    let minute = zeroFill( now.getMinutes() );
    let second = zeroFill( now.getSeconds() );

    if (unit !== undefined && delay !== undefined) {
      let diff = Number(delay)
      switch (unit) {
        case 'hour':
          hour = (now.getHours() + diff) < 24 ?
          zeroFill( now.getHours() + diff ) : zeroFill( (now.getHours() + diff) - 24 );
          break;
        case 'min':
          minute = (now.getMinutes() + diff < 60) ?
          zeroFill( now.getMinutes() + diff ) :
          zeroFill( now.getMinutes() + diff - 60 );
          break;
        case 'sec':
          second = (now.getSeconds() + diff < 60) ?
          zeroFill( now.getSeconds() + diff ) :
          zeroFill( now.getSeconds() + diff - 60 );
          break;
        default:
          break;
      }
    }

    setTime(hour + ':' + minute + ':' + second);
  }

  setInterval(countClock, 1000);

  return (
    <>
      <SEO title="Clock"></SEO>
      <ClockText id="clock">{ time }</ClockText>
    </>
  )
}

export default Clock
