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

          {/* <Route exact path = '/teams/:id'>
            <TeamDetails />
            /////////////////////////////
          This is where I left off Work on TeamDetails.js and set the function up to go by id the Fetch Should be working though
          //////////////////////////////////////
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
