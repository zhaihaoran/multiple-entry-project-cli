import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;
// route
import { Routes } from '@route/index';
// comp
import Sidebar from '@comp/Layout/Sidebar.jsx';

import '@scss/admin_common.scss';

class App extends React.Component {
    render() {
        return (
            <Layout className="admin-layout">
                <Sidebar />
                <Layout>
                    <Header className="admin-header">
                        <Icon
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggle}
                        />
                    </Header>
                    <Content className="admin-content">
                        <Breadcrumb className="admin-breadcrumb">
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div id="context">
                            {Routes.map((route, index) => (
                                <Route
                                    key={'comp-' + index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         sidebar: state.basic.toggle
//     };
// };

export default App;
