
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export class Header extends Component {

    render() {
        return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Drinks</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/fav">fav</Link>
      </Navbar>
        )
    }
}

export default Header
