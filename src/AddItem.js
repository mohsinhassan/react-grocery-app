import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setItem, handleSubmit}) => {
  const inputRef = useRef(null);
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <input autoFocus 
      ref={inputRef}
      id="addItem" type="text" placeholder="Add Item" required value={newItem} onChange={(e) => setItem(e.target.value)}/>
      <button type="submit" onClick={() => inputRef.current.focus()} ><FaPlus /></button>
    </form>
  );
};

export default AddItem;