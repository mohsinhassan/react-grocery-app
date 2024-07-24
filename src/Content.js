import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Content = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', checked: false},
        { id: 2, name: 'Banana', checked: false},
        { id: 3, name: 'Orange', checked: false}
    ]);
    const handleNameChange = () => {
        const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      };
    const handleClick = (e) => {
        console.log(e.target.innerText);
    }
    const handleCheckbox = (name) => {
        console.log(name + ' clicked'   );
    }


return (
    <main className='content'>
            <ul>
                    {items.map((item) => (
                                    <li className='item' key={item.id}>
                                            <input type='checkbox' onChange={() => handleCheckbox()} checked={item.checked} />
                                            <label>{item.name}</label>
                                            <FaTrashAlt role="button" tabIndex="0" />
                                    </li>
                    ))}
            </ul>
            
    </main>
)
}

export default Content
