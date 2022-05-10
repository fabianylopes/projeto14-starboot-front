import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/sign-in" element={<SignIn/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;