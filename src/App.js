import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SignIn from './components/auth/signin';
import Layout from './components/auth/layout';

function App() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<SignIn />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;