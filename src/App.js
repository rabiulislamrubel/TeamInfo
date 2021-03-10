import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/team/:teamId'>
            <Team/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
