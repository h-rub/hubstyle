import React from 'react';
import ModalBasic from '../../../components/ModalBasic';
import { useForm } from 'react-hook-form';

const ModalCreateTittleJob = ({
  feedbackModalOpen,
  setFeedbackModalOpen,
  setBannerSuccessOpen,
  setBannerErrorOpen,
  setUpdateJobList,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const createJobTitle = async (dataJob) => {
    fetch('https://hubhr.herokuapp.com/api/job-title/create/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataJob),
    }).then((response) => {
      if (response.status === 201) {
        setBannerSuccessOpen(true);
        setFeedbackModalOpen(false);
        reset();
        setTimeout(() => {
          setBannerSuccessOpen(false);
        }, 3000);
      } else {
        setBannerErrorOpen(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
        }, 3000);
      }
      setUpdateJobList(true);
    });
  };

  return (
    <div className='m-1.5'>
      <ModalBasic
        id='feedback-modal'
        modalOpen={feedbackModalOpen}
        setModalOpen={setFeedbackModalOpen}
        title='Crear perfil profesional'>
        {/* Modal content */}
        <form onSubmit={handleSubmit(createJobTitle)}>
          <>
            <div className='px-5 py-4'>
              <div className='space-y-3'>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Nombre del perfil profesional
                    <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    type='text'
                    autoComplete='off'
                    className='form-input w-full'
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
                  {errors.job_title && (
                    <span className='text-red-500 text-sm'>
                      {errors.job_title.message}
                    </span>
                  )}
                </div>
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
                    setFeedbackModalOpen(false);
                  }}>
                  Cancelar
                </button>
                <button type='submit' className='btn-sm bg-primary  text-white'>
                  Crear puesto
                </button>
              </div>
            </div>
          </>
        </form>
      </ModalBasic>
      {/* End */}
    </div>
  );
};

export default ModalCreateTittleJob;
