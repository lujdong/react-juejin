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
                            <Aside />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout
