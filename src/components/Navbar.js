import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Signup from "./Signup";
import Login from "./Login";

import "bootstrap/dist/css/bootstrap.min.css";


class Navbar extends Component {
  state = {
      signup: false,
      login: false,
    };

  handleCloseSignUp = () => this.setState({signup: false});
  handleSignUp = () => this.setState({signup: true});
  handleCloseLogin = () => this.setState({login: false});
  handleLogin = () => this.setState({login: true});
  handleSwitchSL = () => this.setState({signup: false, login: true});
  handleSwitchLS = () => this.setState({login: false, signup: true});

  render(props) {
    const {signup,login} = this.state;
    return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand"  to="/">Wayfarer</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
  ​
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">

              { this.props.currentUser ?
              <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </li>
              </>
            : 
              <>
              <li className="nav-item">
                <a className="nav-link btn" onClick={this.handleSignUp}>MSignup</a>
              </li>

              
              <li className="nav-item">
                <a className="nav-link btn" onClick={this.handleLogin}>MLogin</a>
              </li>
            </>
          }
            </ul>
          </div>
        </div>
      </nav>

      {/*Signup Modal*/}
      <Modal show={signup} onHide={this.handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
{/*          <button variant="secondary" onClick={this.handleCloseSignUp}>
            Close
          </button>*/}
          
          <p>Already have an account?</p>
          <a className="btn text-info" onClick={this.handleSwitchSL}>
            <u>Log in</u>
          </a>
        </Modal.Footer>
      </Modal>

      {/*Login Modal*/}
      <Modal show={login} onHide={this.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
{/*          <button variant="secondary" onClick={this.handleCloseLogin}>
            Close
          </button>*/}
          <p>Not signed up yet?</p>
          <a className="btn text-info" onClick={this.handleSwitchLS}>
            <u>Sign up</u>
          </a>
        </Modal.Footer>
      </Modal>
    </>
    );
}
}

export default Navbar;
