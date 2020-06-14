import React, { useState } from "react";
import "./EnterProjectDetails.css";
import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";

const EnterProjectDetails = () => {
  const [projectName, setProjectName] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const [projectAccess, setProjectAccess] = useState("");
  const [projectType, setProjectType] = useState("");

  return (
    <div className="container">
      <h6 className="EnterProjectDetailsTitle">Enter Project Details!</h6>
      <FormGroup className="EnterProjectDetails">
        <TextField
          id="projectNameInput"
          label="Project Name"
          variant="outlined"
          aria-describedby="my-helper-text"
          type="text"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="EnterProjectDetails">
        <TextField
          id="projectKeyInput"
          label="Project Key"
          variant="outlined"
          aria-describedby="my-helper-text"
          type="text"
          value={projectKey}
          onChange={(e) => {
            setProjectKey(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="EnterProjectDetails">
        <TextField
          id="projectAccessInput"
          label="Project Access"
          variant="outlined"
          aria-describedby="my-helper-text"
          type="text"
          value={projectAccess}
          onChange={(e) => {
            setProjectAccess(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="EnterProjectDetails">
        <TextField
          id="projectTypeInput"
          label="Project Type"
          variant="outlined"
          aria-describedby="my-helper-text"
          type="text"
          value={projectType}
          onChange={(e) => {
            setProjectType(e.target.value);
          }}
        />
      </FormGroup>
    </div>
  );
};
export default EnterProjectDetails;
