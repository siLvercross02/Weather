import React from "react";
import { Row, Col, Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="welcome" replace={true} />;
  }

  return (
    <div className="container">
      <Row className="mt-5">
        <Col md={12} lg={12} xs={12}>
          <Row className="justify-content-center">
            <Col md={6} lg={6} xs={6}>
              <h4 className="mb-5">
                Welcome to the weather forecast web application. Please Login
                with your Github user to use the application and view the
                weather in your city.
              </h4>
              <Button onClick={() => loginWithRedirect()}>Login</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
