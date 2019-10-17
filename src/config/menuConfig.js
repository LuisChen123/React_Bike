const menuList = [
    {
        title: 'Home',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: 'Buttons',
                key: '/admin/ui/buttons',
            },
            {
                title: 'Modals',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/admin/ui/notification',
            },
            {
                title: 'Message',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab',
                key: '/admin/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/admin/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title: 'Form',
        key: '/admin/form',
        children: [
            {
                title: 'Login',
                key: '/admin/form/login',
            },
            {
                title: 'Reg',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: 'Table',
        key: '/admin/table',
        children: [
            {
                title: 'base',
                key: '/admin/table/basic',
            },
            {
                title: 'high',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/admin/rich'
    },
    {
        title: '城市管理',
        key: '/admin/city'
    },
    {
        title: '订单管理',
        key: '/admin/order',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/admin/user'
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap'
    },
    {
        title: '图标',
        key: '/admin/charts',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie'
            },
            {
                title: '折线图',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission'
    },
];
export default menuList;