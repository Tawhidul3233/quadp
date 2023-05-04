import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summary from './Components/Summary';

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/summary/:showId' element={<Summary></Summary>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
