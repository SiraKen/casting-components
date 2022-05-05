import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Clock from "./pages/clock";
import Counter from "./pages/counter";
import Page404 from "./pages/404";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
        `}
      />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/clock/:unit/:delay" component={Clock} />
            <Route exact path="/counter" component={Counter} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
