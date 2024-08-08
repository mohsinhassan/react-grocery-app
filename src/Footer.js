import React from 'react'
let year = new Date().getFullYear();
const Footer = ({ length }  ) => {
  return (
    <footer> 
      {length} List {length === 1 ? " Item" : length < 1 ? ""  : " Items "}<br/> 
      CopyRight &copy {year}
    </footer>
  )
}

export default Footer
