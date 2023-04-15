import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Login page/Signin/Signin';
import Signup from './Login page/Signup/Signup';
import Header from './components/Header/Header';

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
