import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../index.css";
import Form from "react-bootstrap/Form";

function Login({ handleLogin, error }) {
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setUsernameError(false);
    setPasswordError(false);

    let error = false;
    if (!username.length) {
      setUsernameError(true);
      error = true;
    }

    if (!password.length) {
      setPasswordError(true);
      error = true;
    }

    if (!error) {
      handleLogin({
        username,
        password,
      });
    }
  };

  return (
    <MDBContainer fluid className="loginPage">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "410px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your username and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Username"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(event) => setUsername(event.target.value)}
              />
              {usernameError && (
                <Form.Control.Feedback type="invalid">
                  Please enter username.
                </Form.Control.Feedback>
              )}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordError && (
                <Form.Control.Feedback type="invalid">
                  Please enter team password.
                </Form.Control.Feedback>
              )}

              {error && (
                <Form.Control.Feedback type="invalid">
                  Something went worng.
                </Form.Control.Feedback>
              )}

              <MDBBtn
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
                onClick={login}
              >
                <span>Login</span>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
