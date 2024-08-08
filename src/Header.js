import React from 'react'

const Header = ({title}) => {
  return (<h1 className='header'>{ title } </h1>
  )
}

Header.defaultProps = {
  title: 'Default Grocery List'
}
export default Header
