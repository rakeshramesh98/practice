import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu mode="inline" theme="dark" inlineCollapsed={collapsed}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <a href="/Pageheaders">Pageheaders</a>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <a href="/Paginations">Paginations</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <a href="/Menus">Menus</a>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <a href="/Dropdowns">Dropdowns</a>
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            <a href="/Buttons">Buttons</a>
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            <a href="/Breadcrumbs">Breadcrumbs</a>
          </Menu.Item>
          <Menu.Item key="7" icon={<ContainerOutlined />}>
            <a href="/Navigations">Navigations</a>
          </Menu.Item>
          <Menu.Item key="8" icon={<ContainerOutlined />}>
            <a href="/Typo">Typography</a>
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Autocomplete">
            <Menu.Item key="9">
              <a href="/Basic">Basic</a>
            </Menu.Item>
            <Menu.Item key="10">
              <a href="/Lookup">Lookup</a>
            </Menu.Item>
            <Menu.Item key="11">
              <a href="/Noncase">Noncase</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Cascader">
            <Menu.Item key="13">
              <a href="/Load">Load</a>
            </Menu.Item>
            <Menu.Item key="14">
              <a href="/Side">Slide</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Checkbox">
            <Menu.Item key="15">
              <a href="/Controlled">Controlled</a>
            </Menu.Item>
            <Menu.Item key="16">
              <a href="/Withgrid">With grid</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Data Picker">
            <Menu.Item key="17">
              <a href="/Datapicker">Basic</a>
            </Menu.Item>
            <Menu.Item key="18">
              <a href="/Borderless">Borderless</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Form">
            <Menu.Item key="19">
              <a href="/Dynamicform">Layout</a>
            </Menu.Item>
            <Menu.Item key="20">
              <a href="/Registration">Registration</a>
            </Menu.Item>
            <Menu.Item key="21">
              <a href="/Formlayout">Otherlayout</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<AppstoreOutlined />} title="Input">
            <Menu.Item key="22">
              <a href="/Group">Group</a>
            </Menu.Item>
            <Menu.Item key="23">
              <a href="/Prepost">Pre Post</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" icon={<AppstoreOutlined />} title="Radio">
            <Menu.Item key="24">
              <a href="/GroupRadio">Group</a>
            </Menu.Item>
            <Menu.Item key="25">
              <a href="/SolidRadio">Solid</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub8" icon={<AppstoreOutlined />} title="Divider">
            <Menu.Item key="26">
              <a href="/Horizontal">Horizontal</a>
            </Menu.Item>
            <Menu.Item key="27">
              <a href="/Vertical">Vertical</a>
            </Menu.Item>
            <Menu.Item key="28">
              <a href="/Title">Title</a>
            </Menu.Item>
            <Menu.Item key="29">
              <a href="/Withouttitle">Withouttitle</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub9" icon={<AppstoreOutlined />} title="Grid">
            <Menu.Item key="30">
              <a href="/Allignment">Allignment</a>
            </Menu.Item>
            <Menu.Item key="31">
              <a href="/Flexstretch">Flexstretch</a>
            </Menu.Item>
            <Menu.Item key="32">
              <a href="/Gutter">Gutter</a>
            </Menu.Item>
            <Menu.Item key="33">
              <a href="/Playground">Playground</a>
            </Menu.Item>
            <Menu.Item key="34">
              <a href="/Typesetting">Typesetting</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub10" icon={<AppstoreOutlined />} title="Space">
            <Menu.Item key="35">
              <a href="/Customize">Customize</a>
            </Menu.Item>
            <Menu.Item key="36">
              <a href="/Vertical">Vertical</a>
            </Menu.Item>
            <Menu.Item key="37">
              <a href="/Sider">Side</a>
            </Menu.Item>
            <Menu.Item key="38">
              <a href="/Side">Sidercontent</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
