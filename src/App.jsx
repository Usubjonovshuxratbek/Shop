import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Login page/SignUp/SignUp';
import Header from './components/Header/Header';
import Signin from './Login page/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Header />
    </div>
  );
}
export default App;
