import React from 'react';
import {DateTime} from 'luxon';
//import {version} from './../../../../package.json';

const version = "1.0.0"

const Footer = () => {

  return (
    <footer className="main-footer">
      <strong>
        <span>Copyright © {DateTime.now().toFormat('y')} </span>
        <a href="https://RMerlin.com" target="_blank" rel="noopener noreferrer">
          RMerlin.com
        </a>
        <span>.</span>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>version</b>
        <span>&nbsp;{version}</span>
      </div>
    </footer>
  );
};

export default Footer;
