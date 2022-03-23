import logo from './logo.svg';
import LandingPage from './views/LandingPage/LandingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/'>
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
