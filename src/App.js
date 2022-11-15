import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
   
  
  );
}

export default App;
