import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { toggleControlSidebar, toggleSidebarMenu } from '../../../store/reducers/ui';
import UserDropdown from './user-dropdown/UserDropdown';
import MessagesDropdown from './messages-dropdown/MessagesDropdown';
import NotificationsDropdown from './notifications-dropdown/NotificationsDropdown';
import LanguagesDropdown from './languages-dropdown/LanguagesDropdown';
import { Button } from '../../../components';





const Header = () => {
  const dispatch = useDispatch();
  const navbarVariant = useSelector((state) => state.ui.navbarVariant);
  const headerBorder = useSelector((state) => state.ui.headerBorder);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const handleToggleControlSidebar = () => {
    dispatch(toggleControlSidebar());
  };

  const getContainerClasses = useCallback(() => {
    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if (headerBorder) {
      classes = `${classes} border-bottom-0`;
    }
    return classes;
  }, [navbarVariant, headerBorder]);

  return (
    <nav className={getContainerClasses()}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            onClick={handleToggleMenuSidebar}
            type="button"
            className="nav-link"
          >
            <i className="fas fa-bars" />
          </button>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Contactenos
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <MessagesDropdown />
        <NotificationsDropdown />
        <LanguagesDropdown />
        <UserDropdown />
        <li className="nav-item">
          <Button className="nav-link" onClick={handleToggleControlSidebar}>
            <i className="fas fa-th-large" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
