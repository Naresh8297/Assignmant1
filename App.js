
import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import PomodoroTimer from './Components/PomodoroTimer';
import BreakTimer from './Components/BreakTimer';

function App() {
  return (
    <BrowserRouter>
    <Router>
    
        <Route exact path="/" component={Login} />
        <Route path="/timer" component={PomodoroTimer} />
        <Route path="/break" component={BreakTimer} />
      
    </Router>
    </BrowserRouter>
  );
}

export default App;

