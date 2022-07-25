import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Banner from '../../components/Banner';
import ProfessionalTableItem from './ProfessionalTableItem';
import ModalCreateTittleJob from './helpers/ModalCreateTittleJob';
import StateContext from '../../context/StateContext';

const ProfessionalTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const {
    jobList,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
  } = useContext(StateContext);

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
                  Perfiles profesionales 👨🏻‍💻
                </h1>
              </div>
              {/* Right: Actions */}
              <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
                {/* Search form */}
                <div className='relative'>
                  <label htmlFor='action-search' className='sr-only'>
                    Buscar...
                  </label>
                  <input
                    autoComplete='false'
                    id='action-search'
                    className='form-input pl-9 focus:border-primary'
                    type='search'
                    placeholder='Buscar...'
                  />
                  <div
                    className='absolute inset-0 mt-2.5 right-auto group'
                    aria-label='Search'>
                    <svg
                      className='w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
                      <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
                    </svg>
                  </div>
                </div>
                {/* Add member button */}
                <div>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                      setFeedbackModalOpen(true);
                    }}
                    className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                    <svg
                      className='w-4 h-4 fill-current opacity-50 shrink-0'
                      viewBox='0 0 16 16'>
                      <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                    </svg>
                    <span className='hidden xs:block ml-2'>
                      Añadir perfil profesional
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {!jobList.length ? (
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
                      Añade el primer perfil profesional
                    </h2>
                    <div className='mb-6'>
                      Crea los perfiles profesionales de nuestros hubstars
                    </div>
                    <Link to='/hubstars/add'>
                      <button className='btn bg-secondary hover:bg-primary hover:text-white text-primary'>
                        <svg
                          className='w-4 h-4 fill-current opacity-50 shrink-0'
                          viewBox='0 0 16 16'>
                          <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                        </svg>
                        <span className='ml-2'>Añadir perfil profesional</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className='bg-white shadow-lg rounded-sm border border-slate-200 relative'>
                {/* BANNER SUCCESS AND DANGER */}
                <div className='space-y-3'>
                  {/* BANNERS INFO  */}
                  <Banner
                    type='success'
                    open={bannerSuccessOpen}
                    setOpen={setBannerSuccessOpen}>
                    operación exitosa. El perfil profesional se guardo.
                  </Banner>
                  <Banner
                    type='error'
                    open={bannerErrorOpen}
                    setOpen={setBannerErrorOpen}>
                    Lo sentimos, al parecer tenemos problemas con nuestro
                    servidor.
                  </Banner>
                </div>
                <header className='px-5 py-4'>
                  <h2 className='font-semibold text-slate-800'>
                    Todos los perfiles profesionales{' '}
                    <span className='text-slate-400 font-medium'>442</span>
                  </h2>
                </header>
                <div>
                  {/* Table */}
                  <div className='overflow-x-auto'>
                    <table className='table-auto w-full divide-y divide-slate-200'>
                      {/* Table header */}
                      <thead className='text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200'>
                        <tr>
                          <th className='px-2 first:pl-14 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='font-semibold text-left'>
                              Titulo de profesion
                            </div>
                          </th>
                          <th className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='font-semibold text-left'>
                              Editar
                            </div>
                          </th>
                          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='font-semibold text-left'>
                              Eliminar
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      {jobList.map((title) => (
                        <ProfessionalTableItem
                          key={title.id}
                          job_title={title.job_title}
                        />
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      {/* MODAL CREATE */}
      <ModalCreateTittleJob
        setFeedbackModalOpen={setFeedbackModalOpen}
        feedbackModalOpen={feedbackModalOpen}
        setBannerSuccessOpen={setBannerSuccessOpen}
        setBannerErrorOpen={setBannerErrorOpen}
      />
    </div>
  );
};

export default ProfessionalTable;
