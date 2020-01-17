
import Header from 'components/Header'

import Recommend from 'views/recommend'
import Following from 'views/following'

const routers = [
    {
        path: '/timeline',
        component: Header,
        redirect: '/timeline/recommend',
        children: [
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/following',
                components: Following
            }
        ]
    }
]

export default routers
