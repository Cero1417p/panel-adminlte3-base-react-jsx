import React from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from '../../../../components';


const NotificationsDropdown = () => {

  return (
    <Dropdown
      isOpen={false}
      size="lg"
      buttonTemplate={
        <>
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </>
      }
      menuTemplate={
        <>
          <span className="dropdown-item dropdown-header">
            15 notificaciones
          </span>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-envelope mr-2" />
            <span>
              4 mensajes nuevos
            </span>
            <span className="float-right text-muted text-sm">
              3 mins
            </span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-users mr-2" />
            <span>
              5 solicitudes de amistad
            </span>
            <span className="float-right text-muted text-sm">
              12 hours
            </span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-file mr-2" />
            <span>
              3 reportes nuevos
            </span>
            <span className="float-right text-muted text-sm">
              2 days
            </span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item dropdown-footer">
            ver todas las notificaciones
          </Link>
        </>
      }
    />
  );
};

export default NotificationsDropdown;
