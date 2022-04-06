import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { MenuItem } from '../../../components/';
import { MENU } from './menu';

/*export interface IMenuItem {
  name: string;
  path?: string;
  children?: Array<IMenuItem>;
}*/


const MenuSidebar = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const sidebarSkin = useSelector((state) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state) => state.ui.menuChildIndent);

  const nombreEmpresa = 'PeúFarma'

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/" className="brand-link">
        <img
          src="/img/logo.png"
          alt="Brand-Logo"
          className="brand-image img-circle elevation-3"
          style={{opacity: '.8'}}
        />
        <span className="brand-text font-weight-light">{nombreEmpresa}</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={user.picture || '/img/default-profile.png'}
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <Link to="/profile" className="d-block">
              {user.email}
            </Link>
          </div>
        </div>
        <nav className="mt-2" style={{overflowY: 'hidden'}}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem) => (
              <MenuItem key={menuItem.name} menuItem={menuItem} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
