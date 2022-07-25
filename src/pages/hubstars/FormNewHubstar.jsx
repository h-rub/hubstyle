import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ModalConfirm from '../hubstars/helpers/ModalConfirm';
import Banner from '../../components/Banner';
import { LoadingButton } from '../hubstars/helpers/LoadingButton';
import StateContext from '../../context/StateContext';

function FormNewHubstar() {
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [bannerSuccessOpen, setBannerSuccessOpen] = useState(false);
  const [bannerErrorOpen, setBannerErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { jobList, countryAll } = useContext(StateContext);

  const onSubmit = (data) => console.log(data);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: { signature: 'false' } });

  const NewHub = (data) => {
    fetch('https://hubhr.herokuapp.com/api/associate/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok === true) {
        setBannerSuccessOpen(true);
        setLoading(true);
        setTimeout(() => {
          navigate('/hubstars/all');
        }, 3000);
      } else if (response.ok === false) {
        setBannerErrorOpen(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
        }, 7000);
      }
    });
  };

  function valid() {
    let archivo = document.getElementById('archivo').value,
      extension = archivo.substring(archivo.lastIndexOf('.'), archivo.length);
    let imgsize = document.getElementById('archivo').files[0].size;
    if (
      document
        .getElementById('archivo')
        .getAttribute('accept')
        .split(',')
        .indexOf(extension) < 0
    ) {
      alert('formato incorrecto del tamaño');
    } else if (imgsize > 1048676) {
      alert('excedes del tamaño');
    }
  }

  return (
    <>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
        {/* Page header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Añadir colaborador ✨
          </h1>
        </div>
        {/* BANNER SUCCESS AND ERROR */}
        {bannerSuccessOpen ? (
          <div className='space-y-3'>
            <Banner
              type='success'
              open={bannerSuccessOpen}
              setOpen={setBannerSuccessOpen}>
              operación exitosa. Redirigiendo...
            </Banner>
          </div>
        ) : bannerErrorOpen ? (
          <div className='space-y-3'>
            <Banner
              type='error'
              open={bannerErrorOpen}
              setOpen={setBannerErrorOpen}>
              Los datos ya existen en nuestra base de datos, favor de verificar
              CURP y RFC
            </Banner>
          </div>
        ) : null}

        <div className='border-t border-slate-200'></div>
        <div className='space-y-8 mt-8'>
          <h2 className='text-2xl text-slate-800 font-bold mb-6'>
            Datos personales
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  {errors.gender && (
                    <span className='text-red-500 text-sm'>
                      {errors.gender.message}
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
                    <option value='Entrevistado'>Entrevistado</option>
                    <option value='Intern'>Intern</option>
                    <option value='Planta'>Planta</option>
                    <option value='Freelancer'>Freelancer</option>
                    <option value='Baja'>Baja</option>
                  </select>
                  {errors.status && (
                    <span className='text-red-500 text-sm'>
                      {errors.status.message}
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
                      {jobList.map((title) => (
                        <option key={title.id} value={title.id}>
                          {title.job_title}
                        </option>
                      ))}
                    </select>
                    {errors.job_title && (
                      <span className='text-red-500 text-sm'>
                        {errors.job_title.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* INPUT SIGNATURE */}
              <div className='hidden'>
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
                <div className='relative w-full'>
                  <label className='block text-sm font-medium mb-1'>
                    Fecha de Inicio <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    type='date'
                    className='form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-full styleDate'
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
                </div>
              </div>
              {/* INPUT FINISH DATE */}
              <div className='flex space-x-5'>
                <div className='relative w-full'>
                  <label className='block text-sm font-medium mb-1'>
                    Fecha final <span className='text-rose-500'>*</span>
                  </label>
                  <input
                    type='date'
                    className='form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-full styleDate'
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
                      {countryAll.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.country}
                        </option>
                      ))}
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
            <article className='mt-10'>
              <h2 className='text-2xl text-slate-800 font-bold mb-6'>
                Breve descripción
              </h2>
              <div className='border-t border-slate-200'></div>
            </article>
            <section className='mt-8'>
              <div>
                {/* SHORT DESCRIPTION */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Descripción del usuario (gustos, personalidad, etc)
                    <span className='text-rose-500'>*</span>
                  </label>
                  <textarea
                    className='form-input w-full'
                    type='text'
                    autoComplete='off'
                    {...register('short_description', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                      maxLength: {
                        value: 150,
                        message: 'soló se permiten 150 caracteres',
                      },
                    })}
                  />
                  {errors.short_description && (
                    <span className='text-red-500 text-sm'>
                      {errors.short_description.message}
                    </span>
                  )}
                </div>
                {/* INPUT ADJUNTAR ARCHIVO */}
                <div className='mt-8'>
                  <label className='block text-sm font-medium mb-1'>
                    Añade una imagen del usuario
                  </label>
                  <input
                    onChange={valid}
                    accept='.jpg,.png'
                    id='archivo'
                    type='file'
                  />
                  <ModalConfirm
                    dangerModalOpen={dangerModalOpen}
                    setDangerModalOpen={setDangerModalOpen}
                  />
                </div>
              </div>
            </section>
            <section className='w-full flex space-x-6 justify-center items-center mt-10'>
              <div className='m-1.5'>
                {!loading ? (
                  <button
                    type='submit'
                    className='btn bg-emerald-500 hover:bg-emerald-600 text-white'>
                    Guardar
                  </button>
                ) : (
                  <LoadingButton />
                )}
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
}

export default FormNewHubstar;
