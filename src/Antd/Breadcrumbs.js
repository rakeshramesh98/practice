import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Menu } from "antd";

import { HomeOutlined, UserOutlined } from "@ant-design/icons";
export default function Breadcumbs() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          General
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Layout
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Navigation
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <h1>Simplest use</h1>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <hr></hr>
      <h1>With Icon</h1>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
      <hr></hr>
      <h1>With Dropdown</h1>
      <Breadcrumb>
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Component</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>
          <a href="">General</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
      </Breadcrumb>
      <hr></hr>
      <h1>With Seperator</h1>
      <Breadcrumb separator="">
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <hr></hr>
      <h1>Customised Seperator</h1>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <hr></hr>
      <a href="https://codesandbox.io/s/sgobp">
        For using with react-router or other router
      </a>
    </div>
  );
}
