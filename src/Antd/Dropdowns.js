import React,{useState} from 'react';
import 'antd/dist/antd.css';
import './index.css'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
export default function Dropdowns(){
    const [visible, setVisible] = useState(false);
    const { SubMenu } = Menu;
    const handleButtonClick=(e)=> {
        message.info('Click on left button.')
        console.log('click left button', e)
      }
      const handleMenuClick=(e)=> {
        message.info('Click on menu item.')
        console.log('click', e)
      }
     const handleMenuClick3 = e => {
        if (e.key === '3') {
          setVisible(visible)
        }
      };
    const handleVisibleChange3 = flag => {
        setVisible(flag)
      };
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              3rd menu item
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );
      const menu2 = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );
      const menu3 = (
        <Menu onClick={handleMenuClick3}>
          <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
          <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
          <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
        </Menu>
      );
      const menu4 = (
        <Menu>
          <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" disabled>
            3rd menu item（disabled）
          </Menu.Item>
        </Menu>
      );
      
      const menu5 = (
        <Menu onClick={onClick}>
          <Menu.Item key="1">1st menu item</Menu.Item>
          <Menu.Item key="2">2nd menu item</Menu.Item>
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
      const menu6 = (
        <Menu>
          <Menu.ItemGroup title="Group title">
            <Menu.Item>1st menu item</Menu.Item>
            <Menu.Item>2nd menu item</Menu.Item>
          </Menu.ItemGroup>
          <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
          </SubMenu>
          <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
          </SubMenu>
        </Menu>
      );
      return(
          <div>
              <h1>Hover</h1>
               <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
                </a>
            </Dropdown>
            <hr></hr>
            <h1>Hover Buttons</h1>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <Button>bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>bottomRight</Button>
                </Dropdown>
                <br />
                <Dropdown overlay={menu} placement="topLeft" arrow>
                <Button>topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topCenter" arrow>
                <Button>topCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topRight" arrow>
                <Button>topRight</Button>
                </Dropdown>
                <hr></hr>
                <h1>Click</h1>
                <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <DownOutlined />
                </a>
            </Dropdown>
            <hr></hr>
                <h1>Button dropdown with icon</h1>
                <Space wrap>
                <Dropdown.Button onClick={handleButtonClick} overlay={menu2}>
                Dropdown
                </Dropdown.Button>
                <Dropdown.Button overlay={menu2} placement="bottomCenter" icon={<UserOutlined />}>
                Dropdown
                </Dropdown.Button>
                <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                Dropdown
                </Dropdown.Button>
                <Dropdown.Button
                overlay={menu2}
                buttonsRender={([leftButton, rightButton]) => [
                    <Tooltip title="tooltip" key="leftButton">
                    {leftButton}
                    </Tooltip>,
                    React.cloneElement(rightButton, { loading: true }),
                ]}
                >
                With Tooltip
                </Dropdown.Button>
                <Dropdown overlay={menu2}>
                <Button>
                    Button <DownOutlined />
                </Button>
                </Dropdown>
            </Space>
            <hr></hr>
            <h1>Hiding menu</h1>
                    <Dropdown
                overlay={menu3}
                onVisibleChange={handleVisibleChange3}
                visible={visible}
            >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
                </a>
            </Dropdown>

            <hr></hr>
            <h1>Placement</h1>
            <Space direction="vertical">
            <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
            </Dropdown>
            </Space>
            <Space wrap>
            <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter">
                <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
            </Dropdown>
            </Space>
        </Space>

        <hr></hr>
            <h1>Divider and disabled menu item</h1>
            <Dropdown overlay={menu4}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
                </a>
            </Dropdown>
          
          <hr></hr>
          <h1>Click event</h1>
          <Dropdown overlay={menu5}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me, Click menu item <DownOutlined />
          </a>
        </Dropdown>
        <hr></hr>
          <h1>Cascading</h1>
        <Dropdown overlay={menu6}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Cascading menu <DownOutlined />
    </a>
  </Dropdown>
  <hr></hr>
          <h1>Cascading</h1>
          <Dropdown overlay={menu6} trigger={['contextMenu']}>
    <div
      className="site-dropdown-context-menu"
      style={{
        textAlign: 'center',
        height: 200,
        lineHeight: '200px',
      }}
    >
      Right Click on here
    </div>
  </Dropdown>
        </div>
      )
     
}