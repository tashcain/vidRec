import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Recorder/main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/main/:id" component={Main} />
          <Route exact path="/" component={() => <Redirect to="/main/:id" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
