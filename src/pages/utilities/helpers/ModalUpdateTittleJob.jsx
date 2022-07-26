import React from 'react';
import ModalUpdate from '../../../components/ModalUpdate';

const ModalUpdateTittleJob = ({ updateModalOpen, setUpdateModalOpen, id }) => {
  return (
    <div className='m-1.5'>
      <ModalUpdate
        id='feedback-modal'
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        title='Actualizar perfil profesional'>
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
          </div>
        </div>
        {/* Modal footer */}
        <div className='px-5 py-4 border-t border-slate-200'>
          <div className='flex flex-wrap justify-end space-x-2'>
            <button
              className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
              onClick={(e) => {
                e.stopPropagation();
                setUpdateModalOpen(false);
              }}>
              Cancelar
            </button>
            <button className='btn-sm bg-primary text-white'>
              Actualizar puesto
            </button>
          </div>
        </div>
      </ModalUpdate>
      {/* End */}
    </div>
  );
};

export default ModalUpdateTittleJob;
