import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inbox from './views/Inbox/Inbox';
import Invoives from './views/Invoices/Invoives';
import Employees from './views/Employees/Employees';
import ChatRoom from './views/ChatRoom/ChatRoom';
import Calendar from './views/Calendar/Calendar';
import Dashboard from './views/Dashboard/Dashboard';
import Error from './views/Error/Error';
import Products from './views/Products/Products';
import Profil from './views/profil/Profil';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import ResetPassword from './views/ResetPassword/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="resetPassword" element={<ResetPassword/>} />
          <Route path="/dashboard" element={<App />}>
            <Route index  element={<Dashboard />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="products" element={<Products />} />
            <Route path="invoices" element={<Invoives />} />
            <Route path="employees" element={<Employees />} />
            <Route path="chatRoom" element={<ChatRoom />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="profil" element={<Profil />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
