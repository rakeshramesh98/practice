import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { DatePicker, Space } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

function Datapicker() {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  );
}
export default Datapicker;
