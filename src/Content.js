import React from 'react'
import ItemList from './ItemList'
const Content = ( {items , handleCheckbox , handleDelete } ) => {
    
return (
    <>
        {items.length ? (
            <ItemList items={items} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
 
        ) : ( 
            <p>There are no items</p>
            )
        }
       
    </> 
)
}

export default Content
