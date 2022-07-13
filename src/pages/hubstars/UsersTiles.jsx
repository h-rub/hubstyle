import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import UsersTilesCard from './UsersTilesCard';
import PaginationNumeric from '../../components/PaginationNumeric';

import Image01 from '../../images/user-64-01.jpg';
import Image02 from '../../images/user-64-02.jpg';
import Image03 from '../../images/user-64-03.jpg';
import Image04 from '../../images/user-64-04.jpg';
import Image05 from '../../images/user-64-05.jpg';
import Image06 from '../../images/user-64-06.jpg';
import Image07 from '../../images/user-64-07.jpg';
import Image08 from '../../images/user-64-08.jpg';
import Image09 from '../../images/user-64-09.jpg';
import Image10 from '../../images/user-64-10.jpg';
import Image11 from '../../images/user-64-11.jpg';
import Image12 from '../../images/user-64-12.jpg';

function UsersTiles() {
  const items = [
    {
      id: 0,
      name: 'Dominik McNeail',
      image: Image01,
      link: '#0',
      location: '🇮🇹',
      content:
        'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
  ];

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
            {/* Page header */}
            <div className='sm:flex sm:justify-between sm:items-center mb-8'>
              {/* Left: Title */}
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                  Hubstars ✨
                </h1>
              </div>

              {/* Right: Actions */}
              <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
                {/* Search form */}
                <SearchForm />
                {/* Add member button */}
                <Link to='/hubstars/add'>
                  <button className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                    <svg
                      className='w-4 h-4 fill-current opacity-50 shrink-0'
                      viewBox='0 0 16 16'>
                      <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                    </svg>
                    <span className='hidden xs:block ml-2'>
                      Añadir colaborador
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {items.length === 0 ? (
              <div className='border-t border-slate-200'>
                <div className='max-w-2xl m-auto mt-16'>
                  <div className='text-center px-4'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4'>
                      <svg className='w-5 h-6 fill-current' viewBox='0 0 20 24'>
                        <path
                          className='text-slate-500'
                          d='M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z'
                        />
                        <path
                          className='text-slate-300'
                          d='M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z'
                        />
                        <path
                          className='text-slate-400'
                          d='M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z'
                        />
                      </svg>
                    </div>
                    <h2 className='text-2xl text-slate-800 font-bold mb-2'>
                      Añade el primer colaborador
                    </h2>
                    <div className='mb-6'>
                      Crea los registros de las personas que hacen posible
                      Hubmine
                    </div>
                    <Link to='/hubstars/add'>
                      <button className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                        <svg
                          className='w-4 h-4 fill-current opacity-50 shrink-0'
                          viewBox='0 0 16 16'>
                          <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                        </svg>
                        <span className='ml-2'>Añadir colaborador</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className='grid grid-cols-12 gap-6'>
                {items.map((item) => {
                  return (
                    <UsersTilesCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      link={item.link}
                      location={item.location}
                      content={item.content}
                    />
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {/* <div className="mt-8">
              <PaginationNumeric />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default UsersTiles;
