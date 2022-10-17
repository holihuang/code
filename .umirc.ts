export default {
    npmClient: 'pnpm',
    // 集成dva
    plugins: [
        '@umijs/plugins/dist/dva',
    ],
    dva: {},
    routes: [
        {
        path: '/login',
        component: 'login/index'
    }, {
        path: '/',
        routes: [{
            path: '/',
            component: 'index',
            routes: [{
                path: '/',
                redirect: '/home',
            }, {
                path: 'home',
                component: 'home/index',
                routes: [{
                    path: '/home/a',
                    component: 'home/A',
                    routes: [
                        {
                            path: '/home/a/c',
                            component: 'home/A/C',
                            routes: [{
                                path: '/home/a/c/d',
                                component: 'home/A/C/D',
                                routes: [{
                                    path: '/home/a/c/d/e',
                                    component: 'home/A/C/D/E'
                                }],
                            }],
                        }
                    ],                    
                }, {
                    path: '/home/b',
                    component: 'home/B'
                }],
            }, {
                path: 'my',
                component: './My',
            }, {
                path: 'user',
                component: 'user/index',
                wrappers: [
                    '@/wrappers/auth'
                ],
            }],
        }],
    }],
};
