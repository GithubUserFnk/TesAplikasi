import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Registrasi from './Components/Registrasi';
import Piechart from './Components/Piechart';

function App() {
  return (
      <Router>
        <Route path={["/home", "/"]} exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/piechart" component={Piechart} />
      </Router>
  );
}

export default App;
