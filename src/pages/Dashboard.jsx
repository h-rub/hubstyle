import React, { useState } from 'react';
import StateContext from './hubstars/context/StateContext';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';

import AnalyticsCard01 from '../partials/analytics/AnalyticsCard01';
import AnalyticsCard10 from '../partials/analytics/AnalyticsCard10';

// const data = {
//   email: 'jozmeza@gmail.com',
//   token: '68f1f0e87bc5e929cebc96e82ca66fc411c8469e',
// };

// async function prueba(data) {
//   return fetch('https://hubhr.herokuapp.com/auth/validate-token/', {
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; Access-Control-Allow-Origin: *',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}

            <WelcomeBanner />

            {/* Cards */}
            <div className='grid grid-cols-12 gap-6'>
              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/* Polar chart (Sessions By Gender) */}
              <AnalyticsCard10 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
