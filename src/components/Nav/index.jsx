import React from 'react'

import './Nav.scss'

const navList = [
    '推荐',
    '关注',
    '后端',
    '前端',
    'Android',
    'iOS',
    '人工智能',
    '开发工具',
    '代码人生',
    '阅读',
    '标签管理'
]

const Nav = () => {
    return (
        <nav className="nav-container container">
            <ul className="nav-point">
                {
                    navList.map((item, index) => {
                        return (
                            <li className="nav-item"
                                key={index}
                            >
                                <span>{item}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default Nav
