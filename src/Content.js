import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Content = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', checked: true},
        { id: 2, name: 'Banana', checked: false},
        { id: 3, name: 'Orange', checked: false}
    ]);
    /* const handleNameChange = () => {
        const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    } 
    const handleClick = (e) => {
        console.log(e.target.innerText);
    }*/
    const handleCheckbox = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
        
    }

    const handleDelete = (id) => {
        alert(id)
        const listItems = items.filter((item) => item.id !== id );
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
        
    }


return (
    <main className='content'>
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    
                        <input type='checkbox' onChange={() => handleCheckbox(item.id)} checked={item.checked} />
                        <label style={(item.checked) ? { textDecoration: 'line-through'} : null }>{item.name}{item.checked}</label>
                        <FaTrashAlt role="button" tabIndex="0" onDoubleClick={() => handleDelete(item.id)}/>
                </li>
            ))}
        </ul>
            
    </main>
)
}

export default Content
