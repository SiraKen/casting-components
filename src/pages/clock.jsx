import { React, useState } from "react";
import { useParams } from "react-router";
import SEO from "../components/seo";
import styled from "styled-components";

const ClockText = styled.p`
  margin: 0;
  font-size: 3rem;
`

const Clock = () => {
  const [ time, setTime ] = useState('Loading...');

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

      // convert to number
      delay = Number(delay)

      /**
       * return error if given args are...
       * hour < 24 | minute < 60 | second < 60
       */
      if ((unit == 'hour' && 24 < delay ) || (unit == 'min' && 60 < delay) || (unit == 'sec' && 60 < delay)) {
        setTime('Error');
        return false;
      }

      switch (unit) {
        case 'hour':
          hour = (now.getHours() + delay) < 24 ?
          zeroFill( now.getHours() + delay ) :
          zeroFill( (now.getHours() + delay) - 24 );
          break;
        case 'min':
          minute = (now.getMinutes() + delay < 60) ?
          zeroFill( now.getMinutes() + delay ) :
          (() => {
            (hour + 1) < 24 ? hour++ : hour = zeroFill(0);
            return zeroFill( now.getMinutes() + delay - 60 );
          })();
          break;
        case 'sec':
          second = (now.getSeconds() + delay < 60) ?
          zeroFill( now.getSeconds() + delay ) :
          (() => {
            (minute + 1) < 60 ? minute++ : minute = zeroFill(0);
            return zeroFill( now.getSeconds() + delay - 60 );
          })();
          break;
        default:
          setTime('Error');
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
