import './App.css';
import SignIn from './Login page/SignIn/SignIn';
import SignUp from './Login page/SignUp/SignUp';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}
export default App;
