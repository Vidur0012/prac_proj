import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

export function Header() {

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand>React App</MDBNavbarBrand>
        <MDBNavbarNav right fullWidth={false} className='mb-1 mb-lg-0'>
          <MDBNavbarLink active aria-current='page'>
            <Link to="/signup">
              <b>Signup</b>
            </Link>
          </MDBNavbarLink>
          <MDBNavbarLink>
            <Link to="/signin">
              <b>Signin</b>
            </Link>
          </MDBNavbarLink>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}