import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
import LoginPage from './components/Authentication/LoginPage/LoginPage';
import SignUpPage from './components/Authentication/SignUpPage/SignUpPage';
import Navigation from './components/Navigation/Navigation';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import { authenticatedNav, unauthenticatedNav } from './assets/navigation';
import storage from './app/localStorage';
import 'toastify-js/src/toastify.css';
import AddItem from './components/AddItem/AddItem';
import DeleteItem from './components/DeleteItem/DeleteItem';

function App() {
  const role = storage.get('role');

  const location = useLocation();

  useEffect(() => {}, [location]);

  if (storage.get('token')) {
    return (
      <div className="grid min-h-screen justify-items-end">
        <Navigation urls={authenticatedNav} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MyReservations />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/doctor/details/:name" element={<DoctorDetails />} />
          {role === 'admin' && (
          <>
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/delete-item" element={<DeleteItem />} />
          </>
          ) }
        </Routes>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen justify-items-end">
      <Navigation urls={unauthenticatedNav} />
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/delete-item" element={<DeleteItem />} />
      </Routes>
    </div>
  );
}

export default App;
