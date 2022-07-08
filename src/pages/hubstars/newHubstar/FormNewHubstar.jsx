import React from "react";
import { useForm } from "react-hook-form";

function FormNewHubstar () {

  const {
    handleSubmit,
    watch,
    register,
    formState: {errors},
  } = useForm()

  return(
    <>
       <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

         {/* Page header */}
         <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Añadir colaborador ✨</h1>
            </div>
            <div className="border-t border-slate-200"></div>
            <div className="space-y-8 mt-8">
            <h2 className="text-2xl text-slate-800 font-bold mb-6">Datos personales</h2>
            <div className="grid gap-5 md:grid-cols-3">
            <div>
               
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Nombre<span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('fist_name', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.username && (
                        <span className='text-red-500 text-sm'>
                          {errors.username.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Apellido<span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('last_name', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.last_name && (
                        <span className='text-red-500 text-sm'>
                          {errors.last_name.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1">Email<span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
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
                      })}/>  {errors.email && (
                        <span className='text-red-500 text-sm'>
                          {errors.email.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1">rfc<span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('rfc', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.rfc && (
                        <span className='text-red-500 text-sm'>
                          {errors.rfc.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" >curp <span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('curp', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.curp && (
                        <span className='text-red-500 text-sm'>
                          {errors.curp.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Gender  <span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('gender', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.gender && (
                        <span className='text-red-500 text-sm'>
                          {errors.gender.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Nombre  <span className="text-rose-500">*</span></label>
                        <input className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('rfc', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.rfc && (
                        <span className='text-red-500 text-sm'>
                          {errors.rfc.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Apellido  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Email  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Nombre  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full"  autoComplete='off'
                        type='text'
                        {...register('username', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'El formato no es correcto',
                        },
                      })}/>  {errors.username && (
                        <span className='text-red-500 text-sm'>
                          {errors.username.message}
                        </span>
                      )}
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Apellido  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Email  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>
                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Email  <span className="text-rose-500">*</span></label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>
                   
     
      </div>
      </div>
      </div>
   
    </>
  )
}

export default FormNewHubstar