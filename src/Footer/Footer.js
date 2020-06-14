import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="Footer">
      <MDBFooter color="blue">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="FooterBody">
            <MDBCol md="5">
              <h5 className="title">Taskatic</h5>
              <p>Taskatic is a project management tool</p>
            </MDBCol>
            <MDBCol md="3" align="center">
              <h5 className="title">Company</h5>

              <ul className="ul">
                <li className="list-unstyled">
                  <a href="#!">About us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Careers</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Social</h5>
              <ul className="ul">
                <li className="list-unstyled">
                  <a href="#!">Facebook</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Instagram</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Twitter</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="FooterBottom">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#Taskatic"> Taskatic.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
