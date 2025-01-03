import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { DonationForm } from './pages/donate/DonationForm';
import { DonationRecord } from './pages/donate/DonationRecord';
import { DonationConfirmation } from './pages/donate/DonationConfirmation';
import { RequestList } from './pages/requests/RequestList';
import { AppointmentList } from './pages/appointments/AppointmentList';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { RewardsPage } from './pages/rewards/RewardsPage';
import { CreateRequest } from './pages/requests/Request';
import {SOS} from './pages/requests/SOS';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonationForm />} />
            <Route path="/donate/record" element={<DonationRecord />} />
            <Route path="/donate/confirmation" element={<DonationConfirmation />} />
            <Route path="/requests" element={<RequestList />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/requests/new" element={<CreateRequest />} />
            <Route path="/requests/SOS" element={<SOS />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}