import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Footer, Content } = Layout;

import Sidebar from '@comp/Layout/Sidebar.jsx';

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        const { children } = this.props;
        return (
            <Layout className="admin-layout">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/topics">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="admin-header">
                        <Icon
                            className="trigger"
                            type={
                                this.state.collapsed
                                    ? 'menu-unfold'
                                    : 'menu-fold'
                            }
                            onClick={this.toggle.bind(this)}
                        />
                    </Header>
                    <Content className="admin-content">{children}</Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Wrapper;
