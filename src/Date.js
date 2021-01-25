import React from "react";
import "./index";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./index.css";

function Date() {
  return (
    <div className="App">
      <h1>Using ANTD </h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}

export default Date;
