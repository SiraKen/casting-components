import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Clock from './pages/clock';
import Counter from './pages/counter';
import Page404 from './pages/404';
import Navigation from './components/navigation';
import './assets/bootstrap-reboot.min.css';
import './assets/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/clock" component={ Clock } />
          <Route exact path="/clock/:unit/:delay" component={ Clock } />
          <Route exact path="/counter" component={ Counter } />
          <Route component={ Page404 } />
        </Switch>
        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
}

export default App;
