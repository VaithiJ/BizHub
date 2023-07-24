import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Open from './components/Pages/Open/Open';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Open/>}/>
       

        </Routes>
                  
                     
                      </Router>
    </div>
  );
}

export default App;
