import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from './components/auth/publicLayout';

function App() {
    return ( 
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<PublicLayout/>} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;