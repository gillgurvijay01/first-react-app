// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/*" element={<PublicLayout />} />
              <Route path="panel/*" element={<PrivateLayout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
