import React from 'react';
import ModalBlank from '../src/components/ModalBlank';

const MoldalConfirm = ({ infoModalOpen, setInfoModalOpen }) => {
  return (
    <div className='m-1.5'>
      {/* Start */}
      <ModalBlank
        id='info-modal'
        modalOpen={infoModalOpen}
        setModalOpen={setInfoModalOpen}>
        <div className='p-5 flex space-x-4'>
          {/* Icon */}
          <div className='w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100'>
            <svg
              className='w-4 h-4 shrink-0 fill-current text-primary'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' />
            </svg>
          </div>
          {/* Content */}
          <div>
            {/* Modal header */}
            <div className='mb-2'>
              <div className='text-lg font-semibold text-slate-800'>
                Create new Event?
              </div>
            </div>
            {/* Modal content */}
            <div className='text-sm mb-10'>
              <div className='space-y-2'>
                <p>
                  Semper eget duis at tellus at urna condimentum mattis
                  pellentesque lacus suspendisse faucibus interdum.
                </p>
              </div>
            </div>
            {/* Modal footer */}
            <div className='flex flex-wrap justify-end space-x-2'>
              <button
                className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
                onClick={(e) => {
                  e.stopPropagation();
                  setInfoModalOpen(false);
                }}>
                Cancel
              </button>
              <button className='btn-sm bg-primary hover:bg-indigo-600 text-white'>
                Yes, Create it
              </button>
            </div>
          </div>
        </div>
      </ModalBlank>
      {/* End */}
    </div>
  );
};

export default MoldalConfirm;
