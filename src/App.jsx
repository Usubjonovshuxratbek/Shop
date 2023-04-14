import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Signin from './Login/Signin/Signin';
import Signup from './Login/Signup/Signup';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Header />
    </div>
  );
}
export default App;
