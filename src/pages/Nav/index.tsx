import { history, useLocation } from 'umi'
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MailOutlined, YuqueOutlined, SlackOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './index.less'

type Props = {
    isCollpased: boolean;
    dispatch: () => void;
}

export default function Nav(props: Props) {
    const { isCollpased, dispatch } = props;
    const [current, setCurrent] = useState<string>('home')
    const location = useLocation();
    useEffect(() => {
        const { pathname } = location
        setCurrent(pathname.split('/')[pathname.split('/').length - 1])
    }, [])
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem
    }
    const items: MenuProps['items'] = [
        getItem('home', 'home', <MailOutlined />, [
            getItem('Item 1', 'g1', null,
                [
                    getItem('Option a', 'a', null, [
                        getItem('Option C', 'c', null, [
                            getItem('Option D', 'd', null, [
                                getItem('Option E', 'e')
                            ]),
                        ])
                    ]),
                    getItem('Option b', 'b')
                ],
                'group'),
        ]),
        getItem('My', 'my', <YuqueOutlined />),
        getItem('用户中心', 'user', <SlackOutlined />)
    ]
    function handleMenu(obj: { keyPath: string[], key: string }) {
        const arr: string[] = [...obj.keyPath];
        history.push(`/${arr.reverse().join('/')}`);
        setCurrent(obj.key)
    }
    function handleToggle() {
        dispatch({
            type: 'menu/toggleCollpased',
        })
    }
    return (
        <div className={classnames(styles.menu, {[styles['menu-active']]: !isCollpased})}>
                  <Menu
                      inlineCollapsed={isCollpased}
                onClick={handleMenu}
                style={{ 'display': 'flex', flexDirection: 'column', flex: '1' }}
                    theme='dark'
                    mode="inline"
                    selectedKeys={[current]}
                    items={items}
            />
            <div className={styles.toggle}>
                {
                    <MenuOutlined className={styles.icon} onClick={handleToggle} />
                }
            </div>
                </div>
    )
}