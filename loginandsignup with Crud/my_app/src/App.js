import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Getdaetail from './components/Getdaetail';
import View from './components/View';
import Update from './components/Update';
import Loginsuccess from './components/Loginsuccess';
function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>

<Route  path='/login' element={<Login/>}/>
<Route  path='/signup' element={<Signup/>} />
<Route path='/' element={<Getdaetail/>}/>

<Route path="/getqwerty/:id" element={<View/>}/>

<Route path='/update/:id' element={<Update/>}/>

<Route path='loginsuccess' element={<Loginsuccess/>}/>
      </Routes>
      
      
      
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
