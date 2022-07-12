import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styleDate.css';
import ModalConfirm from '../../../helpers/ModalConfirm';
import ModalBlank from '../../components/ModalBlank';

function FormNewHubstar() {
  const onsubmit = (data) => console.log(data);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const NewHub = (data) => {
    fetch('https://hubhr.herokuapp.com/api/associate/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json === 200) {
          console.log(json);
        } else {
          console.log(json);
        }
      });
  };
  console.log(infoModalOpen);

  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Page header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Añadir colaborador ✨
          </h1>
        </div>
        <div className='border-t border-slate-200'></div>
        <div className='space-y-8 mt-8'>
          <h2 className='text-2xl text-slate-800 font-bold mb-6'>
            Datos personales
          </h2>
          <form onSubmit={handleSubmit(NewHub)}>
            <section className='grid gap-5 md:grid-cols-3'>
              <div>
                {/* INPUT FIRST NAME */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Nombre<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full'
                    autoComplete='off'
                    type='text'
                    {...register('first_name', {
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
                  {errors.first_name && (
                    <span className='text-red-500 text-sm'>
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* INPUT LAST NAME */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Apellido<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full'
                    autoComplete='off'
                    type='text'
                    {...register('last_name', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />{' '}
                  {errors.last_name && (
                    <span className='text-red-500 text-sm'>
                      {errors.last_name.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* EMAIL */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Email<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full'
                    autoComplete='off'
                    type='email'
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />{' '}
                  {errors.email && (
                    <span className='text-red-500 text-sm'>
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* INPUT RFC */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    RFC<span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='uppercase form-input w-full'
                    autoComplete='off'
                    type='text'
                    {...register('rfc', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />{' '}
                  {errors.rfc && (
                    <span className='text-red-500 text-sm'>
                      {errors.rfc.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* INPUT CURP */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    CURP <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='uppercase form-input w-full '
                    autoComplete='off'
                    type='text'
                    {...register('curp', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />{' '}
                  {errors.curp && (
                    <span className='text-red-500 text-sm'>
                      {errors.curp.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* SELECT GENER */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Genero<span className='text-rose-500'>*</span>
                  </label>
                  <select
                    className='form-select w-full'
                    {...register('gender', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}>
                    <option value=''>selecciona</option>
                    <option value='M'>Masculino</option>
                    <option value='F'>Femenino</option>
                  </select>
                  {errors.first_name && (
                    <span className='text-red-500 text-sm'>
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <article className='mt-10'>
              <h2 className='text-2xl text-slate-800 font-bold mb-6'>
                Datos de Empleo
              </h2>
              <div className='border-t border-slate-200'></div>
            </article>
            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              {/* SELECT STATUS */}
              <div>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Estatus<span className='text-rose-500'>*</span>
                  </label>
                  <select
                    className='form-select w-full'
                    {...register('status', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}>
                    <option value=''>selecciona</option>
                    <option>Entrevistado</option>
                  </select>
                  {errors.first_name && (
                    <span className='text-red-500 text-sm'>
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* SELECT JOB TITLE */}
                <div>
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      Titulo del puesto<span className='text-rose-500'>*</span>
                    </label>
                    <select
                      className='form-select w-full'
                      {...register('job_title', {
                        valueAsNumber: true,
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}>
                      <option value=''>selecciona</option>
                      <option value='1'>Backend</option>
                      <option value='2'>Frontend</option>
                    </select>
                    {errors.first_name && (
                      <span className='text-red-500 text-sm'>
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* INPUT SIGNATURE */}
              <div>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='default'>
                  Firma
                  <span className='text-rose-500'>*</span>
                </label>
                <select
                  className='form-select w-full'
                  {...register('signature', {
                    required: {
                      value: true,
                      setValueAs: (val) => true,
                      message: 'El campo es requerido',
                    },
                  })}>
                  <option value=''>selecciona</option>
                  <option value='true'>Si</option>
                  <option value='false'>No</option>
                </select>
                {errors.signature && (
                  <span className='text-red-500 text-sm'>
                    {errors.signature.message}
                  </span>
                )}
              </div>
              {/* INPUT START DATE */}
              <div className='flex space-x-5'>
                <div className='relative'>
                  <label className='block text-sm font-medium mb-1'>
                    Fecha de Inicio <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    type='date'
                    className='form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60 styleDate'
                    {...register('start_date', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                  />
                  <div className='absolute right-auto top-6 mt-3 mr-4'>
                    <svg
                      className='w-4 h-4 fill-current text-slate-500 ml-3'
                      viewBox='0 0 16 16'>
                      <path d='M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z' />
                    </svg>
                  </div>
                  {errors.start_date && (
                    <span className='text-red-500 text-sm'>
                      {errors.start_date.message}
                    </span>
                  )}
                  {/* INPUT FINISH DATE */}
                </div>
                <div className='relative'>
                  <label className='block text-sm font-medium mb-1'>
                    Fecha final <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    type='date'
                    className='form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60 styleDate'
                    {...register('finish_date', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                  />
                  <div className='absolute right-auto top-6 mt-3 mr-4'>
                    <svg
                      className='w-4 h-4 fill-current text-slate-500 ml-3'
                      viewBox='0 0 16 16'>
                      <path d='M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z' />
                    </svg>
                  </div>
                  {errors.finish_date && (
                    <span className='text-red-500 text-sm'>
                      {errors.finish_date.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
            <article className='mt-10'>
              <h2 className='text-2xl text-slate-800 font-bold mb-6'>
                Dato bancario y localidad
              </h2>
              <div className='border-t border-slate-200'></div>
            </article>
            <section className='grid gap-5 md:grid-cols-3 mt-8'>
              <div>
                {/* INPUT INTERBANK KEY */}
                <div>
                  <label
                    className='block text-sm font-medium mb-1'
                    htmlFor='default'>
                    Cuenta interbancaria
                    <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    className='form-input w-full'
                    autoComplete='off'
                    type='number'
                    {...register('interbank_key', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })}
                  />
                  {errors.interbank_key && (
                    <span className='text-red-500 text-sm'>
                      {errors.interbank_key.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {/* COUNTRY */}
                <div>
                  <div>
                    <label className='block text-sm font-medium mb-1'>
                      País<span className='text-rose-500'>*</span>
                    </label>
                    <select
                      className='form-select w-full'
                      {...register('country', {
                        valueAsNumber: true,
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}>
                      <option value=''>selecciona</option>
                      <option value='1'>MEXICO</option>
                      <option value='2'>COLOMBIA</option>
                    </select>
                    {errors.country && (
                      <span className='text-red-500 text-sm'>
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full flex space-x-6 justify-center items-center mt-10'>
              <div className='m-1.5'>
                <button
                  type='submit'
                  className='btn bg-emerald-500 hover:bg-emerald-600 text-white'>
                  Guardar
                </button>
              </div>
              <div className='m-1.5'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setInfoModalOpen(true);
                  }}
                  type='button'
                  className='btn border-slate-200 hover:border-slate-300 text-emerald-500'>
                  Cancelar
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      {/* MODAL CONFIRM */}
      <ModalConfirm
        setInfoModalOpen={setInfoModalOpen}
        infoModalOpen={infoModalOpen}
      />
    </>
  );
}

export default FormNewHubstar;
