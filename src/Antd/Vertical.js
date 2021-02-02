import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Divider } from "antd";

function Vertical() {
  return (
    <>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </>
  );
}
export default Vertical;
