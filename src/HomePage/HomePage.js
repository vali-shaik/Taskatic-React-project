import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../HomePage/HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import Projects from "../Projects/Projects";
import Login from "../Login/Login";
import CreateNewProject from "../Projects/CreateNewProject/CreateNewProject";
import SideNavPage from "../SideNavigation/SideNavPage";
const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="HomePage">
      <Dashboard />
    </div>
  );
};
export default HomePage;
