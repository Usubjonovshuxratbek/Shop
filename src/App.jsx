import { Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Signin from './Login page/Signin/Signin';
import Signup from './Login page/Signup/Signup';
=======
import Header from './components/Header/Header';
>>>>>>> 9c7b4b1ea18472b9c5904f3da1ab74bfabc38713

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Signin/> */}
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
=======
      <Header />
>>>>>>> 9c7b4b1ea18472b9c5904f3da1ab74bfabc38713
    </div>
  );
}
export default App;
