import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import BagContext from "./contexts/BagContext";
import UserContext from "./contexts/UserContext";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Bag from "./components/Bag";
import Coffees from "./components/Coffees";
import Coffee from "./components/Coffee";
import Home from "./components/Home";

import axios from "axios";




function App() {

  const [bag, setBag] = useState({});
  const [userInfo, setUserInfo] = useState({name:'', street:'', number:'', city:'', state:''});


  function signInAnonymously(){
    /*
    [x] verificar se existe uma sessão para a sacola
    [x] criar nova sessão, caso não exista uma
    */
    const existingToken = localStorage.getItem('bag_token')
    if (!existingToken){
      const promise = axios.post("http://localhost:5000/bag")
      promise.then((response) =>{
       localStorage.setItem('bag_token', response.data)
       setBag(response.data)
       
      })
    } else {
      setBag(existingToken)
    }

  }

    useEffect(signInAnonymously, [signInAnonymously]) 
  
  return (
    <BagContext.Provider value={{ bag, setBag}}>
    <UserContext.Provider value={{userInfo, setUserInfo }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/coffees" element={<Coffees/>}></Route>
              <Route path="/coffees/:coffee_id" element={<Coffee/>}></Route>
              <Route path="/bag" element={<Bag/>}></Route>
              <Route path="/sign-in" element={<SignIn/>}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </BagContext.Provider>
  )
}

export default App;