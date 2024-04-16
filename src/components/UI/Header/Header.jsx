import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__nav-link" href="#">
          <HomeIcon className="header__nav-link--icon" />
          Home
        </a>
        <a className="header__nav-link" href="#">
          <PersonAddIcon className="header__nav-link--icon" />
          Leads
        </a>
      </nav>
    </header>
  )
}

export default Header
