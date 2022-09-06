import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './featuers/home/Home';
import { Page404 } from './featuers/page404/Page404';
import Register from './featuers/register/Register';
import Login from './featuers/login/Login';
import { Dashboard } from './featuers/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
