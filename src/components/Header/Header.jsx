import React, { Component } from 'react';
import UserPopup from './UserPopup';
import '../../css/all.css';
import './css/header.css';

class Header extends Component {


  render() { 
    return (
      <header>
        <UserPopup />
      </header>
    );
  }
}


export default Header;

