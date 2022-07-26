import React, { useEffect, useState } from 'react';
import ModalUpdate from '../../../components/ModalUpdate';
import { useForm } from 'react-hook-form';

const ModalUpdateTittleJob = ({ updateModalOpen, setUpdateModalOpen, id }) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const jobTitleDetail = async () => {
    fetch(`https://hubhr.herokuapp.com/api/job-title-detail?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setValue('job_title', json[0].job_title);
      });
  };

  useEffect(() => {
    jobTitleDetail();
  }, []);

  return (
    <div className='m-1.5'>
      <ModalUpdate
        id='feedback-modal'
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        title='Actualizar perfil profesional'>
        {/* Modal content */}
        <form onSubmit={handleSubmit(jobTitleDetail)}>
          <>
            <div className='px-5 py-4'>
              <div className='space-y-3'>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Nombre del perfil profesional
                    <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full px-2 py-1'
                    type='text'
                    {...register('job_title', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />
                </div>
                {errors.job_title && (
                  <span className='text-red-500 text-sm'>
                    {errors.job_title.message}
                  </span>
                )}
              </div>
            </div>
            {/* Modal footer */}
            <div className='px-5 py-4 border-t border-slate-200'>
              <div className='flex flex-wrap justify-end space-x-2'>
                <button
                  type='button'
                  className='btn-sm border-slate-200 hover:border-slate-300 text-slate-600'
                  onClick={(e) => {
                    e.stopPropagation();
                    setUpdateModalOpen(false);
                  }}>
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='btn-sm bg-primary text-white'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}>
                  Actualizar puesto
                </button>
              </div>
            </div>
          </>
        </form>
      </ModalUpdate>
      {/* End */}
    </div>
  );
};

export default ModalUpdateTittleJob;
