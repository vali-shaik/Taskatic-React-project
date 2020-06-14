import React, { useState } from "react";
import { Select, Input, Button, TextField, FormGroup } from "@material-ui/core";
import "./AddMembers.css";
import { Form } from "react-bootstrap";
const AddMembers = () => {
  const [member, setMember] = useState("");

  return (
    <div className="container">
      <Form inline>
        <FormGroup className="AddMembersTextField">
          <TextField
            type="text"
            variant="outlined"
            label="Add member"
            value={member}
            onChange={(event) => setMember(event.target.value)}
          ></TextField>
        </FormGroup>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </Form>
    </div>
  );
};
export default AddMembers;
