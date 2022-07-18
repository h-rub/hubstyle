import React from 'react';
import ModalBlank from '../src/components/ModalBlank';

export const ModalDelete = ({
  dangerModalOpen,
  setDangerModalOpen,
  id,
  setBannerSuccessOpen,
  setBannerErrorOpen,
  setReloadHubstarList,
}) => {
  const deleteHubstar = async (id) => {
    fetch(`https://hubhr.herokuapp.com/api/associate/delete/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setBannerSuccessOpen(true);
        setDangerModalOpen(false);
        setTimeout(() => {
          setBannerSuccessOpen(false);
        }, 3000);
      } else {
        setBannerErrorOpen(true);
        setDangerModalOpen(false);
        setTimeout(() => {
          setBannerErrorOpen(false);
        }, 5000);
      }
    });
    setReloadHubstarList(true);
  };

  return (
    <div className='m-1.5'>
      {/* Start */}
      <ModalBlank
        id='danger-modal'
        modalOpen={dangerModalOpen}
        setModalOpen={setDangerModalOpen}>
        <div className='p-5 flex space-x-4'>
          {/* Icon */}
          <div className='w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100'>
            <svg
              className='w-4 h-4 shrink-0 fill-current text-rose-500'
              viewBox='0 0 16 16'>
              <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z' />
            </svg>
          </div>
          {/* Content */}
          <div>
            {/* Modal header */}
            <div className='mb-2'>
              <div className='text-lg font-semibold text-slate-800'>
                ¿Seguro de que quieres eliminar el registro?
              </div>
            </div>
            {/* Modal content */}
            <div className='text-sm mb-10'>
              <div className='space-y-2'>
                <p>
                  Al eliminar el presente registro, ya no se podra recuperar la
                  información del colaborador.
                </p>
              </div>
            </div>
            {/* Modal footer */}
            <div className='flex flex-wrap justify-end space-x-2'>
              <button
                className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
                onClick={(e) => {
                  e.stopPropagation();
                  setDangerModalOpen(false);
                }}>
                No deseo eliminar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteHubstar(id);
                }}
                type='button'
                className='btn-sm bg-rose-500 hover:bg-rose-600 text-white'>
                Sí quiero eliminar
              </button>
            </div>
          </div>
        </div>
      </ModalBlank>
      {/* End */}
    </div>
  );
};
