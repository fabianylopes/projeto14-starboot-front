import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from "./components/Home";
import Coffee from "./components/Coffee";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/coffees/:coffee-id" element={<Coffee/>}></Route>
            <Route path="/sign-in" element={<SignIn/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;