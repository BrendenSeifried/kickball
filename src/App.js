import LandingPage from './views/LandingPage/LandingPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TeamList from './views/Teams/TeamList';
import Header from './components/Header';
import TeamDetails from './views/Teams/TeamDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = '/'>
            <LandingPage/>
          </Route>
          <Route exact path = '/teams'>
            <TeamList />
          </Route>

          <Route exact path = '/teams/:id'>
            <TeamDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
