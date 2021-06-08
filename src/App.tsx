import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Task1 } from "./pages/Task1";
import { Task2 } from "./pages/Task2";
import { Task3 } from "./pages/Task3";
import { Task4 } from "./pages/Task4";

export default function App() {
  return (
    <Router>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Link to="/">
            <Button variant="primary">Task 1</Button>
          </Link>
          <Link to="/task2">
            <Button variant="primary">Task 2</Button>
          </Link>
          <Link to="/task3">
            <Button variant="primary">Task 3</Button>
          </Link>
          <Link to="/task4">
            <Button variant="primary">Task 4</Button>
          </Link>
        </ButtonGroup>
        <Switch>
          <Route path="/task1">
            <Task1 />
          </Route>
          <Route path="/task2">
            <Task2 />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/task4">
            <Task4 />
          </Route>
          <Route path="/">
            <Task1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
