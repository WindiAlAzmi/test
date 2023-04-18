import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
     <div className="">
     <Routes>
      <Route path="/" element={<Layout />} />
     </Routes>
     </div>
  );
}

export default App;
