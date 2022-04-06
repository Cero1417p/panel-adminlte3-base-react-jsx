import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DateTime} from 'luxon';

import styled from 'styled-components';
import { Dropdown } from '../../../../components';
import { logoutUser } from '../../../../store/reducers/auth';

const StyledUserImage = styled.img`
  height: 1.6rem !important;
  width: 1.6rem !important;
  margin-right: 0 !important;
  margin-left: -8px !important;
`;

const UserDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logOut = (event) => {
    event.preventDefault();
    setDropdownOpen(false);
    dispatch(logoutUser());
    navigate('/login');
  };

  const navigateToProfile = (event) => {
    event.preventDefault();
    setDropdownOpen(false);
    navigate('/profile');
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      onChange={(open) => setDropdownOpen(open)}
      className="user-menu"
      menuContainerTag="ul"
      buttonTemplate={
        <StyledUserImage
          src={user.picture || '/img/default-profile.png'}
          className="user-image img-circle elevation-2"
          alt="User"
        />
      }
      menuTemplate={
        <>
          <li className="user-header bg-primary">
            <img
              src={user.picture || '/img/default-profile.png'}
              className="img-circle elevation-2"
              alt="User"
            />
            <p>
              {user.email}
              <small>
                <span>Member since </span>
                <span>
                  {DateTime.fromISO(user.createdAt).toFormat('dd LLL yyyy')}
                </span>
              </small>
            </p>
          </li>
          <li className="user-body">
            <div className="row">
              <div className="col-4 text-center">
                <Link to="/">Followers</Link>
              </div>
              <div className="col-4 text-center">
                <Link to="/">Sales</Link>
              </div>
              <div className="col-4 text-center">
                <Link to="/">Friends</Link>
              </div>
            </div>
          </li>
          <li className="user-footer">
            <button
              type="button"
              className="btn btn-default btn-flat"
              onClick={navigateToProfile}
            >
              Profile
            </button>
            <button
              type="button"
              className="btn btn-default btn-flat float-right"
              onClick={logOut}
            >
              Sing Out
            </button>
          </li>
        </>
      }
    />
  );
};

export default UserDropdown;
