import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Console from './containers/Console/Console';
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact  path="/console" component={Console}/>
            <Route  path="/" component={Home}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
