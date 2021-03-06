import React from 'react'

import Header from 'components/Header'
import Nav from 'components/Nav'
import ContentList from 'components/ContentList'
import Aside from 'components/Aside'

import './Layout.scss'
const Layout = () => {
    return (
        <div className="view-container">
            <Header />
            <main className="main-container">
                <div className="main-container-box">
                    <Nav />
                    <div className="main-content-wrap">
                        <div className="main-content">
                            <ContentList />
                            <div className="content-sidebar index-aside">
                                <Aside cardType="user"
                                    footerText="完整榜单"
                                    headerText="作者榜"
                                    showFooter
                                    showHeader
                                />
                                <Aside cardType="book"
                                    headerText="你可能感兴趣的小册"
                                    showHeader
                                />
                                <Aside cardType="link" />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout
