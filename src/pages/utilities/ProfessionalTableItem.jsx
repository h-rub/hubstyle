import React, { useState } from 'react';

function OrdersTableItem(props) {
  return (
    <tbody className='text-sm'>
      {/* Row */}
      <tr>
        <td className='px-2 first:pl-10 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>16 de junio del 2022</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>Pilar Perez Chavez</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>Proyect Manager</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>Editar</div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>Eliminar</div>
        </td>
      </tr>
    </tbody>
  );
}

export default OrdersTableItem;
