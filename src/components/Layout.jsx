import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Sidebar from '@comps/Layout/Sidebar';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

class Wrapper extends React.Component {
    render() {
        const { children, store } = this.props;
        console.log(store, 'store');
        const { collapsed, toggle } = store;
        console.log(collapsed, toggle);
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
                        <div id="context">{children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Wrapper;
