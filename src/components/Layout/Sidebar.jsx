import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Badge } from 'antd';
import PropTypes from 'prop-types';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

const sidebarList = [
    {
        path: '/about',
        name: '首页',
        icon: 'pie-chart'
    },
    {
        path: '/users',
        name: '活动',
        icon: 'team'
    },
    {
        path: '/orders',
        name: '课程',
        icon: 'user'
    },
    {
        path: '/quiz',
        name: '用户',
        icon: 'users',
        isSub: true,
        subMenu: [
            {
                path: '/oraa',
                name: 'Bill'
            },
            {
                path: '/bb',
                name: 'Tom'
            },
            {
                path: '/cc',
                name: 'Alex'
            }
        ]
    }
];

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            dot: true
        };
    }

    handleSidebarLight(path, lists) {
        const array = [];
        for (let i = 0; i < lists.length; i++) {
            const v = lists[i];

            if (!v.isSub && v.path === path) {
                array.push(v.name);
            }

            if (v.isSub) {
                const value = v.subMenu.find(s => s.path === path);
                value && array.push(value.name);
            }
        }
        console.log(array);
        return array;
    }

    render() {
        return (
            <Sider trigger={null} collapsible>
                <div className="logo" onClick={this.hiddenBadge.bind(this)} />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={this.handleSidebarLight(
                        router.pathname,
                        sidebarList
                    )}
                    mode="inline"
                >
                    {sidebarList.map((v, i) => {
                        if (v.isSub) {
                            const list = v.subMenu.map((cell, j) => (
                                <Item key={cell.name}>
                                    <Link to={`/admin${cell.path}`}>
                                        {cell.name}
                                        <Badge
                                            dot={this.state.dot}
                                            style={{ marginLeft: 10 }}
                                        />
                                    </Link>
                                </Item>
                            ));

                            return (
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            <span>User</span>
                                        </span>
                                    }
                                >
                                    {list}
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Item key={v.name}>
                                    <Link to={`/admin${v.path}`}>
                                        <Icon type={v.icon} />
                                        <span>{v.name}</span>
                                    </Link>
                                </Item>
                            );
                        }
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;
