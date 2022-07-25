import React, { useState, useContext } from 'react';
import ModalUpdateTittleJob from './helpers/ModalUpdateTittleJob';
import ModalDeleteTittleJob from './helpers/ModalDeleteTittleJob';

function OrdersTableItem(props) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);

  return (
    <>
      <tbody className='text-sm'>
        <tr>
          <td>
            {/* MODAL DELETE */}
            <ModalDeleteTittleJob
              dangerModalOpen={dangerModalOpen}
              setDangerModalOpen={setDangerModalOpen}
            />
          </td>
        </tr>
        {/* Row */}
        <tr>
          <td className='px-2 first:pl-14 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center'>{props.job_title}</div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center'>
              <div className='m-1.5'>
                {/* UPDATE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setUpdateModalOpen(true);
                  }}
                  className='btn border-slate-200 hover:border-slate-300'>
                  <svg
                    className='w-4 h-4 fill-current text-slate-500 shrink-0'
                    viewBox='0 0 16 16'>
                    <path d='M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z' />
                  </svg>
                </button>
              </div>
            </div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center'>
              <div className='m-1.5'>
                {/* DELETE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDangerModalOpen(true);
                  }}
                  className='btn border-slate-200 hover:border-slate-300'>
                  <svg
                    className='w-4 h-4 fill-current text-rose-500 shrink-0'
                    viewBox='0 0 16 16'>
                    <path d='M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z' />
                  </svg>
                </button>
              </div>
            </div>
            {/* MODAL UPDATE */}
            <ModalUpdateTittleJob
              updateModalOpen={updateModalOpen}
              setUpdateModalOpen={setUpdateModalOpen}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default OrdersTableItem;
