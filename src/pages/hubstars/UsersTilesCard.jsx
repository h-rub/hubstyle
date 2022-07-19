import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';
import { ModalDelete } from '../../../helpers/ModalDelete';
import Image01 from '../../images/user-64-01.jpg';

function UsersTilesCard(props) {
  const [dangerModalOpen, setDangerModalOpen] = useState(false);

  return (
    <>
      <section className='col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
        <div className='flex flex-col h-full'>
          {/* Card top */}
          <div className='grow p-5'>
            <div className='flex justify-between items-start'>
              {/* Image + name */}
              <header>
                <div className='flex mb-2'>
                  <Link
                    className='relative inline-flex items-start mr-5'
                    to='#'>
                    <div
                      className='absolute top-0 right-0 -mr-2 bg-white rounded-full shadow'
                      aria-hidden='true'>
                      🇲🇽
                      {/* <svg
                        className='w-8 h-8 fill-current text-amber-500'
                        viewBox='0 0 32 32'>
                        <path d='M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z' />
                      </svg> */}
                    </div>
                    <img
                      className='rounded-full'
                      src={Image01}
                      width='64'
                      height='64'
                      alt={Image01}
                    />
                  </Link>
                  <div className='mt-1 pr-1'>
                    <Link
                      className='inline-flex text-slate-800 hover:text-slate-900 space-x-1'
                      to='#'>
                      <h2 className='text-xl leading-snug justify-center font-semibold'>
                        {props.first_name}
                      </h2>
                      <h2 className='text-xl leading-snug justify-center font-semibold'>
                        {props.last_name}
                      </h2>
                    </Link>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium text-slate-400 -mt-0.5 mr-1'>
                        -&gt;
                      </span>
                      <span>{props.country}</span>
                    </div>
                  </div>
                </div>
              </header>
              {/* Menu button */}
              <EditMenu align='right' className='relative inline-flex shrink-0'>
                {/* <li>
          <Link
            className='font-medium text-sm text-slate-600 hover:text-primary flex py-1 px-3'
            to='#0'>
            Option 1
          </Link>
        </li>
        <li>
          <Link
            className='font-medium text-sm text-slate-600 hover:text-primary flex py-1 px-3'
            to='#0'>
            Option 2
          </Link>
        </li> */}
                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDangerModalOpen(true);
                    }}
                    className='font-medium text-sm text-rose-400 hover:text-rose-600 flex py-1 px-3'>
                    Eliminar
                  </button>
                </li>
              </EditMenu>
            </div>
            {/* Bio */}
            <div className='mt-2'>
              <div className='text-sm'>Software Enginner</div>
            </div>
          </div>
          {/* Card footer */}
          <div className='border-t border-slate-200'>
            <div className='flex divide-x divide-slate-200r'>
              <Link
                className='block flex-1 text-center text-sm text-slate-600 hover:text-primary font-medium px-3 py-4'
                to='/messages'>
                <div className='flex items-center justify-center'>
                  <svg
                    className='w-4 h-4 fill-current shrink-0 mr-2'
                    viewBox='0 0 16 16'>
                    <path d='M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z' />
                  </svg>
                  <span>Enviar email</span>
                </div>
              </Link>
              <Link
                className='block flex-1 text-center text-sm text-slate-600 hover:text-primary font-medium px-3 py-4 group'
                to={`/hubstars/update-hubstar/${props.id}`}>
                <div className='flex items-center justify-center'>
                  <svg
                    className='w-4 h-4 fill-current text-slate-600 group-hover:text-primary shrink-0 mr-2'
                    viewBox='0 0 16 16'>
                    <path d='M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z' />
                  </svg>
                  <span>Editar Hubstar</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <ModalDelete
          dangerModalOpen={dangerModalOpen}
          setDangerModalOpen={setDangerModalOpen}
          id={props.id}
          setBannerSuccessOpen={props.setBannerSuccessOpen}
          setBannerErrorOpen={props.setBannerErrorOpen}
          setReloadHubstarList={props.setReloadHubstarList}
        />
      </section>
    </>
  );
}

export default UsersTilesCard;
