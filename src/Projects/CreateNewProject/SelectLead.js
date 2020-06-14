import React from "react";

import Select from "react-select";

const colourOptions = [
  { value: "John", label: "John MR" },
  { value: "Julie", label: "Julie" },
  { value: "Hoilla", label: "Hoilla" },
];

const SelectLead = () => (
  <div className="container">
    <Select defaultValue="select one" options={colourOptions} />
  </div>
);
export default SelectLead;
