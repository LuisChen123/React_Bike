const menuList = [
    {
        title: 'Home',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: 'Button',
                key: '/ui/buttons',
            },
            {
                title: 'Popover',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/ui/notification',
            },
            {
                title: 'Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab',
                key: '/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: 'form',
        key: '/form',
        children: [
            {
                title: 'login',
                key: '/form/login',
            },
            {
                title: 'reg',
                key: '/form/reg',
            }
        ]
    },
    {
        title: 'table',
        key: '/table',
        children: [
            {
                title: 'basic table',
                key: '/table/basic',
            },
            {
                title: 'high table',
                key: '/table/high',
            }
        ]
    },
    {
        title: 'rich text',
        key: '/rich'
    },
    {
        title: 'city',
        key: '/city'
    },
    {
        title: 'order',
        key: '/order',
        btnList: [
            {
                title: 'detail',
                key: 'detail'
            },
            {
                title: 'finish',
                key: 'finish'
            }
        ]
    },
    {
        title: 'user',
        key: '/user'
    },
    {
        title: 'bikeMap',
        key: '/bikeMap'
    },
    {
        title: 'charts',
        key: '/charts',
        children: [
            {
                title: 'bar',
                key: '/charts/bar'
            },
            {
                title: 'pie',
                key: '/charts/pie'
            },
            {
                title: 'line',
                key: '/charts/line'
            },
        ]
    },
    {
        title: 'permission',
        key: '/permission'
    },
];
export default menuList;