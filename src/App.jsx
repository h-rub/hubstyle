import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Fintech from './pages/Fintech';

import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';

import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';

import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';

import TabsPage from './pages/component/TabsPage';

import BadgePage from './pages/component/BadgePage';

import TooltipPage from './pages/component/TooltipPage';
// Function for Private routes or Public Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* Dashboard */}
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path='/dashboard/fintech' element={<Fintech />} />

        <Route path='/community/users-tiles' element={<UsersTiles />} />
        <Route path='/community/profile' element={<Profile />} />
        <Route path='/calendar' element={<Calendar />} />

        <Route path='/settings/account' element={<Account />} />
        <Route path='/settings/notifications' element={<Notifications />} />

        <Route path='/settings/feedback' element={<Feedback />} />

        <Route path='/utility/changelog' element={<Changelog />} />
        <Route path='/utility/roadmap' element={<Roadmap />} />
        <Route path='/utility/faqs' element={<Faqs />} />
        <Route path='/utility/empty-state' element={<EmptyState />} />
        <Route path='/utility/404' element={<PageNotFound />} />

        {/* Auth */}
        <Route
          path='/signin'
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        {/* Vista previa de Componentes */}
        <Route path='/component/form' element={<FormPage />} />
        <Route path='/component/dropdown' element={<DropdownPage />} />
        <Route path='/component/alert' element={<AlertPage />} />
        <Route path='/component/modal' element={<ModalPage />} />
        <Route path='/component/tabs' element={<TabsPage />} />
        <Route path='/component/badge' element={<BadgePage />} />
        <Route path='/component/tooltip' element={<TooltipPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
