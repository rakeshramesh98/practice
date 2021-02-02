import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Switch, Divider } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
export default function Menus() {
  const [theme, setTheme] = useState("dark");
  const [current2, setCurrent2] = useState("1");
  const [mode, setMode] = useState("inline");
  const [theme2, setTheme2] = useState("light");
  const { SubMenu } = Menu;
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent2(e.key);
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const changeTheme2 = (value) => {
    setTheme2(value ? "dark" : "light");
  };

  return (
    <div>
      <hr></hr>
      <h1>Menu Themes</h1>
      <Switch
        checked={setTheme("dark")}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current2]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme2} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme2={theme2}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}
