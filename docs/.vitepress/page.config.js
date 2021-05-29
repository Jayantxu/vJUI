const pageRoute = [
    {
        text: 'VJUI指南',
        link: '/guide/index',
        navUnit: [
            { text: 'VJUI', link: '', children: [
                    { text: 'VJUI介绍', link: '/guide/index' },
                    { text: 'Icon', link: '/guide/Icon' },
                ]
            }
        ]
    },
    {
        text: '所有组件',
        link: '/components/index',
        navUnit: [
            { text: '通用', link: '', children: [
                    { text: 'Icon', link: '/guide/Icon' },
                ]
            }
            
        ]
    }
]
module.exports = pageRoute;