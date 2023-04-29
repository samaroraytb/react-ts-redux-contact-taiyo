import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateContact from './components/CreateContact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/create-contact' element={<CreateContact />} />
    </Routes>
  );
}

export default App;
