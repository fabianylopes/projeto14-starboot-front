import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import UserContext from "./contexts/UserContext";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Bag from "./components/Bag";
import Coffees from "./components/Coffees";
import Coffee from "./components/Coffee";
import Home from "./components/Home";


function App() {

  const [ bag, setBag] = useState([]);

  return (
    <UserContext.Provider value={{ bag, setBag }}>
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
  )
}

export default App;