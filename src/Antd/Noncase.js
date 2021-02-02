import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { AutoComplete } from "antd";
const options = [
  {
    value: "Burns Bay Road",
  },
  {
    value: "Downing Street",
  },
  {
    value: "Wall Street",
  },
];

const Noncase = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export default Noncase;
