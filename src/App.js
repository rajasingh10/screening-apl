
import './App.css';
import Screen from './Screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './Entry';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/screen' element={<Screen />} />
          <Route path='/Entry' element={<Entry />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
