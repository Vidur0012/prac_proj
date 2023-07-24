import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./Components/Signin";
import { Signup } from "./Components/Signup";
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
