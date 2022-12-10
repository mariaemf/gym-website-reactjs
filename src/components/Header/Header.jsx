import React from 'react'
import logo from '../../assets/img/dumble.png'
import '../../styles/header.css'

const Header = () => {
  return (
    <Header >
      <div className='container'>
        <div className='nav_wrapper'>
         
         {/* ========== LOGO =======*/}
         
            <div className='logo'>
            <div className='logo__img'><img src={logo} alt="" /></div>
            <h2>fitBody</h2>
          </div>

        </div>
      </div>
    </Header>
  )
}

export default Header