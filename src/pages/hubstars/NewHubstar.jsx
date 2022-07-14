import React, { useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import FormNewHubstar from './FormNewHubstar';
import { Loading } from '../../../helpers/Loading';

function NewHubstar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className='flex h-screen overflow-hidden'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white'>
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main>
              <FormNewHubstar />
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default NewHubstar;
