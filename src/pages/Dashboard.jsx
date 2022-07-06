import React, { useState } from 'react';

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

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto">
             {/* With Slashes */}
             <div>

                  <div className="px-6 py-8 rounded-sm">
                    <div className="text-right">
                      {/* Start */}
                      <ul className="inline-flex flex-wrap text-sm font-medium">
                        <li className="after:content-['/'] last:after:hidden after:text-slate-400 after:px-2">
                          <a className="text-slate-500 hover:text-primary" href="#0">Dashboard</a>
                        </li>
                        <li className="after:content-['/'] last:after:hidden after:text-slate-400 after:px-2">
                          <a className="text-slate-500 hover:text-primary" href="#0">Main</a>
                        </li>
                     
                      </ul>
                      {/* End */}
                    </div>
                  </div>
                </div>

            {/* Welcome banner */}
            <WelcomeBanner />

          

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;