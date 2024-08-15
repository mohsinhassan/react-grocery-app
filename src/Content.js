import React from 'react'
import ItemList from './ItemList'
const Content = ( {items , handleCheckbox , handleDelete } ) => {
    
return (
    <main className='content'>
        {items.length ? (
            <ItemList items={items} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
 
        ) : ( 
            <p>There are no items</p>
            )
        }
       
    </main>
)
}

export default Content
