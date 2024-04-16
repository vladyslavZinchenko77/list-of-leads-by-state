import React from 'react'

import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav-link" to={'/home'}>
          <HomeIcon className="header__nav-link--icon" />
          Home
        </Link>
        <Link className="header__nav-link" to="/leads">
          <PersonAddIcon className="header__nav-link--icon" />
          Leads
        </Link>
      </nav>
    </header>
  )
}

export default Header
