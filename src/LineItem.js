import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const LineItem = ( {item , handleCheckbox , handleDelete } ) => {
  return (
    <li className='item' key={item.id}>
        <input type='checkbox' onChange={() => handleCheckbox(item.id)} checked={item.checked} />
        <label style={(item.checked) ? { textDecoration: 'line-through'} : null }>{item.name}{item.checked}</label>
        <FaTrashAlt role="button" tabIndex="0" onDoubleClick={() => handleDelete(item.id)}/>
    </li>
  );
};

export default LineItem;