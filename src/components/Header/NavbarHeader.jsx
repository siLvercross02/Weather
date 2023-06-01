import React from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

function NavbarHeader() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <Navbar color="secondary" dark>
        <NavbarBrand href="/" className="me-auto">
          Weather APP
        </NavbarBrand>
        {isAuthenticated ? <Button onClick={logout}>Logout</Button> : null}
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
