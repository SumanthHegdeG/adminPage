import {
  FaTable,
  FaChartArea,
  FaFolder,
  FaWrench,
  FaLaughWink,
  FaAngleRight,
  FaAngleLeft,
  FaCog,
  FaTachometerAlt,
} from 'react-icons/fa'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ showSidebar, toggleSidebar, logout }) => {
  const [showComponent, toggleComponent] = useState(false)
  const [showUtility, toggleUtility] = useState(false)
  const [showFolder, toggleFolder] = useState(false)
  return (
    <ul
      className={
        showSidebar
          ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
          : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
      }
      id='accordionSidebar'
    >
      {/* <!-- Sidebar - Brand --> */}
      <div className='sidebar-brand d-flex align-items-center justify-content-center'>
        <div className='sidebar-brand-icon rotate-n-15'>
          <FaLaughWink className='icon' />
        </div>
        <div className='sidebar-brand-text mx-3'>
          SB Admin <sup>2</sup>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider my-0' />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider' />

      {/* <!-- Heading --> */}
      <div className='sidebar-heading'>Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className='nav-item'>
        <div
          onClick={() => toggleComponent(!showComponent)}
          className={showComponent ? 'nav-link' : 'nav-link collapsed'}
        >
          <FaCog />
          <span>Components</span>
        </div>
        <div className={showComponent ? 'collapse show' : 'collapse'}>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Components:</h6>
            <Link to='/buttons' className='collapse-item'>
              Buttons
            </Link>
            <Link to='/cards' className='collapse-item'>
              Cards
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className='nav-item'>
        <div
          onClick={() => toggleUtility(!showUtility)}
          className={showUtility ? 'nav-link' : 'nav-link collapsed'}
        >
          <FaWrench />
          <span>Utilities</span>
        </div>
        <div className={showUtility ? 'collapse show' : 'collapse'}>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Custom Utilities:</h6>
            <Link
              to='/color'
              className='collapse-item'
              href='utilities-color.html'
            >
              Colors
            </Link>
            <Link
              to='/borders'
              className='collapse-item'
              href='utilities-border.html'
            >
              Borders
            </Link>
            <Link to='/animation' className='collapse-item'>
              Animations
            </Link>
            <Link to='/other' className='collapse-item'>
              Other
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider' />

      {/* <!-- Heading --> */}
      <div className='sidebar-heading'>Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className='nav-item'>
        <div
          onClick={() => toggleFolder(!showFolder)}
          className={showFolder ? 'nav-link' : 'nav-link collapsed'}
        >
          <FaFolder />
          <span>Pages</span>
        </div>
        <div className={showFolder ? 'collapse show' : 'collapse'}>
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Login Screens:</h6>
            <Link to='/login' className='collapse-item' onClick={logout}>
              Login
            </Link>
            <Link to='/register' className='collapse-item' onClick={logout}>
              Register
            </Link>
            <Link to='/forgot' className='collapse-item' onClick={logout}>
              Forgot Password
            </Link>
            <div className='collapse-divider'></div>
            <h6 className='collapse-header'>Other Pages:</h6>
            <Link to='/404' className='collapse-item'>
              404 Page
            </Link>
            <Link to='/blank' className='collapse-item'>
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className='nav-item'>
        <Link to='Charts' className='nav-link'>
          <FaChartArea />
          <span>Charts</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className='nav-item'>
        <Link to='table' className='nav-link'>
          <FaTable />
          <span>Tables</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className='sidebar-divider d-none d-md-block' />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className='text-center d-none d-md-inline'>
        <button
          className='rounded-circle border-0'
          id='sidebarToggle'
          onClick={() => toggleSidebar(!showSidebar)}
        >
          {showSidebar ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
      </div>
    </ul>
  )
}

export default Sidebar
