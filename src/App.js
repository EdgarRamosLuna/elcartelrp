import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import Home from './components/Home';
import Test from './components/Test';
import Header from './components/Header';
import HeaderE from './components/le/Header';
import FooterE from './components/le/Footer';
import HomeE from './components/le/Home';
import Whitelist from './components/Whitelist';
import Dashboard from './components/admin/Dashboard';
import MenuDashboard from './components/admin/MenuDashboard';
import Normativas from './components/admin/Normativas';
import WhitelistLE from './components/le/Whitelist';
import NormativasLE from './components/admin/le/Normativas';
function App() {
  return (
    <div className="App">
      
      
        
      <div className="content">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="test" element={<Test />} />
            <Route path="whitelist" element={<Whitelist />} />
          </Route>
          <Route path="/los-encapuchados" element={<HomeE />}>
            <Route path="multimedia" element={<Test />} />
            <Route path="whitelist" element={<WhitelistLE />} />
          </Route>
          <Route path="/dashboard" element={<MenuDashboard />}>
              <Route path="main" element={<Dashboard />} />
              <Route path="normativas" element={<Normativas />} />
              <Route path="normativasle" element={<NormativasLE />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
