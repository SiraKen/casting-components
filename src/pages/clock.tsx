import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import Layout from "../layouts/default";

const Font = process.env.REACT_APP_CLOCK_FONT;
const Weight = process.env.REACT_APP_CLOCK_WEIGHT;

const ClockText = styled.p`
  margin: 0;
  font-size: 3rem;
  font-weight: ${Weight !== "" && Weight !== undefined ? Weight : "normal"};
  font-family: ${Font !== "" && Font !== undefined
    ? Font
    : "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"};
`;

export default function Clock() {
  const [time, setTime] = useState("Loading...");

  const { unit, delay } = useParams<any>();

  const zeroFill = (num: Number) => {
    return ("00" + num).slice(-2);
  };

  const countClock = () => {
    let now = new Date();
    let hour: number = now.getHours();
    let minute: number = now.getMinutes();
    let second: number = now.getSeconds();

    if (unit !== undefined && delay !== undefined) {
      // convert to number
      // delay = Number(delay);

      /**
       * return error if given args are...
       * hour < 24 | minute < 60 | second < 60
       */
      if (
        (unit === "hour" && 24 < delay) ||
        (unit === "min" && 60 < delay) ||
        (unit === "sec" && 60 < delay)
      ) {
        setTime("Error");
        return false;
      }

      switch (unit) {
        case "hour":
          hour =
            now.getHours() + delay < 24
              ? now.getHours() + delay
              : now.getHours() + delay - 24;
          break;
        case "min":
          minute =
            now.getMinutes() + delay < 60
              ? now.getMinutes() + delay
              : (() => {
                  Number(hour + 1) < 24 ? hour++ : (hour = 0);
                  return now.getMinutes() + delay - 60;
                })();
          break;
        case "sec":
          second =
            now.getSeconds() + delay < 60
              ? now.getSeconds() + delay
              : (() => {
                  minute + 1 < 60 ? minute++ : (minute = 0);
                  return now.getSeconds() + delay - 60;
                })();
          break;
        default:
          setTime("Error");
          break;
      }
    }

    setTime(zeroFill(hour) + ":" + zeroFill(minute) + ":" + zeroFill(second));
  };

  setInterval(countClock, 1000);

  return (
    <Layout>
      <ClockText id="clock">{time}</ClockText>
    </Layout>
  );
}
