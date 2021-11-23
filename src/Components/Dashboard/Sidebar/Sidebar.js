import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import { faCalendarCheck, faUserFriends, faFileAlt, faCog, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='list-unstyled'>
        <li>
          <Link className='text-decoration-none text-white'> <FontAwesomeIcon icon={faBars} /> Dashboard</Link>
        </li>

        <li>
          <Link to='/dashboard/appointment' className='text-decoration-none text-white'> <FontAwesomeIcon icon={faCalendarCheck} /> Appointment</Link>
        </li>

        <li>
          <Link to='/dashboard/allpateints' className='text-decoration-none text-white'> <FontAwesomeIcon icon={faUserFriends} /> Patients</Link>
        </li>

        <li>
          <Link className='text-decoration-none text-white'> <FontAwesomeIcon icon={faFileAlt} /> Prescriptions</Link>
        </li>

        <li>
          <Link to='/addDoctor' className='text-decoration-none text-white'> <FontAwesomeIcon icon={faCog} /> Add Doctor</Link>
        </li>

        <li>
          <Link className='text-decoration-none text-white'> <FontAwesomeIcon icon={faCog} /> Settings</Link>
        </li>

      </ul>
      
    </div>
  );
};

export default Sidebar;
