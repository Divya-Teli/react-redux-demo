import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DatabaseOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import { LocalHospital } from "@material-ui/icons";
import AddDish from "./AddDish";
import DisplayDish from './DisplayDish'
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export default class FullLayout extends Component {
  state = {
    collapsed: false,
    dashboard: false,
    add: false,
    showitems:false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png"
              width={60}
              className="ml-4"
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<DatabaseOutlined />}
             
            >
            <Link to="/dashboard" >Posts</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<PlusSquareOutlined />}
            
            >
              <Link to="/add">Add</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<UploadOutlined />}
            

            >
                <Link to="/items">Items</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div
              className="trigger ml-3"
              onClick={this.toggle}
              style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
            >
              {this.state.collapsed ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )}
            </div>
           
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
         {/* {this.state.dashboard && <Dashboard/>}
         {this.state.add && <AddDish/>}
         {this.state.showitems && <DisplayDish/>} */}

{this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
