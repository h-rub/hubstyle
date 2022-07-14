import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Image01 from '../../images/user-64-01.jpg';
import Banner from '../../components/Banner';
import ModalConfirm from '../../../helpers/ModalConfirm';

const FormUpdateHubstar = () => {
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);

  const onSubmit = (data) => console.log(data);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Editar Hubstar ✨
          </h1>
        </div>
        <div className='border-t border-slate-200'></div>

        <div className='space-y-8 mt-8'>
          <div className='space-y-3'>
            <Banner
              type='success'
              open={bannerSuccessOpen}
              setOpen={setBannerSuccessOpen}>
              operación exitosa. Rediriguiendo...
            </Banner>
          </div>
          <h2 className='text-2xl text-slate-800 font-bold mb-6'>
            Datos personales
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className='flex justify-center items-center'>
              <Link className='relative inline-flex items-start mr-5' to='#'>
                <div
                  className='absolute top-0 right-0 -mr-2 bg-white rounded-full shadow'
                  aria-hidden='true'>
                  <svg
                    className='w-8 h-8 fill-current text-amber-500'
                    viewBox='0 0 32 32'>
                    <path d='M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z' />
                  </svg>
                </div>
                <img
                  className='rounded-full'
                  src={Image01}
                  width='120'
                  height='120'
                  alt={Image01}
                />
              </Link>
            </div> */}
            <section className='grid gap-5 md:grid-cols-3 mt-14'>
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
                      minLength: {
                        value: 13,
                        message: 'El RFC debe de tener 13 caracteres',
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
                      minLength: {
                        value: 18,
                        message: 'La CURP debe de tener al menos 18 caracteres',
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
                    <option value=''>Selecciona</option>
                    <option value='M'>Masculino</option>
                    <option value='F'>Femenino</option>
                    <option value='O'>Otro</option>
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
                    <option value=''>Selecciona</option>
                    <option>Entrevistado</option>
                    <option>Intern</option>
                    <option>Planta</option>
                    <option>Freelancer</option>
                    <option>Baja</option>
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
                      <option value=''>Selecciona</option>
                      <option>Backend Developer</option>
                      <option>Frontend Developer</option>
                      <option>DBA</option>
                      <option>UI/UX</option>
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
                  disabled
                  className='form-select w-full'
                  {...register('signature', {
                    required: {
                      value: true,
                      setValueAs: (val) => true,
                      message: 'El campo es requerido',
                    },
                  })}></select>
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
                      <option value=''>Selecciona</option>
                      <option>Mexico</option>
                      <option>Colombia</option>
                      <option>Ecuador</option>
                      <option>Perú</option>
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
                    setDangerModalOpen(true);
                  }}
                  type='button'
                  className='btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50'>
                  Cancelar
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      {/* MODAL CONFIRM */}
      <ModalConfirm
        dangerModalOpen={dangerModalOpen}
        setDangerModalOpen={setDangerModalOpen}
      />
    </>
  );
};

export default FormUpdateHubstar;
