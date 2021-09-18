import React from "react";
import "../App.css";
import { Navbar, Nav, Container, Form, Button, InputGroup } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const LoginComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo2.PNG" alt="logo" className="photo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#">SignUp</Nav.Link>
              <AccountCircleIcon />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <img
            src="./images/pexels-kindel-media-6994275.jpg"
            alt="Man carrying box of ordered items"
            className="picture"
            height="600px"
          />
        </Grid>
        <Grid item xs={6}>
          <div className="loginform">
            <Form.Floating>
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Username</label>
            </Form.Floating>{" "}
            &nbsp;&nbsp;
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            &nbsp;&nbsp;
            <Button id="loginbtn">Login</Button>
            <InputGroup.Checkbox aria-label="Checkbox" />
            <p>Remember me</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginComponent;
