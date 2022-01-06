import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";
import { firebaseAuthentication } from "../config/firebase";
import Sidebar from "./Sidebar";
import Dashboard from "../Components/Dashboard";

export default class Home extends Component {
  componentDidMount() {
    firebaseAuthentication.onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push("/login");
      }
    });
  }
  handleLogOut = () => {
    firebaseAuthentication.signOut();
  };

  render() {
    return (
      <div>
        <Paper>
          <Button onClick={this.handleLogOut}>Logout</Button>
        </Paper>
        <div class="container-fluid" id="main">
          <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar />
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
