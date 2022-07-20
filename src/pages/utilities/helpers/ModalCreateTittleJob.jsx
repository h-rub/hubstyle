import React from 'react';
import ModalBasic from '../../../components/ModalBasic';

const ModalCreateTittleJob = ({ feedbackModalOpen, setFeedbackModalOpen }) => {
  return (
    <div className='m-1.5'>
      <ModalBasic
        id='feedback-modal'
        modalOpen={feedbackModalOpen}
        setModalOpen={setFeedbackModalOpen}
        title='Crear perfil profesional'>
        {/* Modal content */}
        <div className='px-5 py-4'>
          <div className='space-y-3'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Nombre del perfil profesional
                <span className='text-rose-500'>*</span>
              </label>
              <input className='form-input w-full px-2 py-1' type='text' />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Fecha de creacíon <span className='text-rose-500'>*</span>
              </label>
              <input className='form-input w-full px-2 py-1' type='date' />
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className='px-5 py-4 border-t border-slate-200'>
          <div className='flex flex-wrap justify-end space-x-2'>
            <button
              className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
              onClick={(e) => {
                e.stopPropagation();
                setFeedbackModalOpen(false);
              }}>
              Cancelar
            </button>
            <button className='btn-sm bg-primary hover:bg-indigo-600 text-white'>
              Crear puesto
            </button>
          </div>
        </div>
      </ModalBasic>
      {/* End */}
    </div>
  );
};

export default ModalCreateTittleJob;
