import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Login page/Signin/Signin';
import Signup from './Login page/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      <Routes>
        <Route path='/' element={ <h1>cfgcfg</h1>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;
