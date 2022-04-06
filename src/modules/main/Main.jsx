import React, {useState, useEffect, useCallback} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
//import { loadUser,logoutUser } from '../../store/reducers/auth';
import { types } from './../../types/types'
import { toggleSidebarMenu } from '../../store/reducers/ui';
import { addWindowClass,removeWindowClass, sleep } from '../../utils/helpers';
import Footer from './footer/Footer';
import ControlSidebar from './control-sidebar/ControlSidebar';
import Header from './header/Header';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import { loadUser, logoutUser } from '../../store/reducers/auth';

const Main = () => {

  console.log("MIAN")

  const dispatch = useDispatch();
  const menuSidebarCollapsed = useSelector((state) => state.ui.menuSidebarCollapsed );
  const controlSidebarCollapsed = useSelector((state) => state.ui.controlSidebarCollapsed);
  const screenSize = useSelector((state) => state.ui.screenSize);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const handleToggleMenuSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  const fetchProfile = async () => {
    try {
      //este user esta dentro del TOKEN
      //const token = toke.user
      const user = {email:"ALTO@example.com",picture:null}
      dispatch(loadUser(user));
      await sleep(1000);
      setIsAppLoaded(true);
      console.log("paso fetchprofile 3 segs despues...")
    } catch (error) {
      dispatch(logoutUser());
      await sleep(1000);
      setIsAppLoaded(true);
    }
  };

  useEffect(() => {
    removeWindowClass('register-page');
    removeWindowClass('login-page');
    removeWindowClass('hold-transition');

    addWindowClass('sidebar-mini');

    fetchProfile();
    console.log("paso 1° efect despues de fetch 3 segs...")
    return () => {
      removeWindowClass('sidebar-mini');
    };
  }, []);

  useEffect(() => {
    console.log("PASO 2° EFECT")
    removeWindowClass('sidebar-closed');
    removeWindowClass('sidebar-collapse');
    removeWindowClass('sidebar-open');
    if (menuSidebarCollapsed && screenSize === 'lg') {
      addWindowClass('sidebar-collapse');
    } else if (menuSidebarCollapsed && screenSize === 'xs') {
      addWindowClass('sidebar-open');
    } else if (!menuSidebarCollapsed && screenSize !== 'lg') {
      addWindowClass('sidebar-closed');
      addWindowClass('sidebar-collapse');
    }
  }, [screenSize, menuSidebarCollapsed]);

  useEffect(() => {
    if (controlSidebarCollapsed) {
      removeWindowClass('control-sidebar-slide-open');
    } else {
      addWindowClass('control-sidebar-slide-open');
    }
  }, [screenSize, controlSidebarCollapsed]);

  const getAppTemplate = useCallback(() => {
    if (!isAppLoaded) {
      return (
        <div className="preloader flex-column justify-content-center align-items-center">
          <img
            className="animation__shake"
            src="/img/logo.png"
            alt="PeruFarma-Logo"
            height="60"
            width="60"
          />
        </div>
      );
    }
    return (
      <>
        <Header />

        <MenuSidebar />

        <div className="content-wrapper">
          <div className="pt-3" />
          <section className="content">
            <Outlet />
          </section>
        </div>
        <Footer />
        <ControlSidebar />
        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </>
    );
  }, [isAppLoaded]);

  return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
