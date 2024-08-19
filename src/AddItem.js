import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setItem, handleSubmit}) => {
  return (
	<form className='addForm' onSubmit={handleSubmit}>
	  <label htmlFor='addItem'>Add Item</label>
      <input autoFocus id="addItem" type="text" placeholder="Add Item" required value={newItem} onChange={(e) => setItem(e.target.value)}/>
      <button type="submit" ><FaPlus /></button>    
	</form>
  );
};

export default AddItem;