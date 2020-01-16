import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'

import logo from 'static/svg/logo.svg'
import logoMobile from 'static/svg/logo-mobile.svg'
import search from 'static/svg/search.svg'
import searchFocus from 'static/svg/search-focus.svg'

import './Header.scss'
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.searchInput = React.createRef()

        this.state = {
            isInputFocus: false,
            displayType: 'none',
            avatar: 'https://avatars3.githubusercontent.com/u/39292981?s=400&u=3a754a9959968f94b61ca27ab6cda01900d9650c&v=4'
        }
    }

    focusSearchInput = () => {
        this.setState({ isInputFocus: true }, () => {
            this.searchInput.current.parentNode.className += ' input-focus'
        })
    }

    blurSearchInput = () => {
        this.setState({ isInputFocus: false }, () => {
            this.searchInput.current.parentNode.className =
                this.searchInput.current.parentNode.className.replace('input-focus', '')
        })
    }

    render() {
        return (
            <div className="header-container container">
                <header className="main-header container">
                    <div className="main-header-box flex-row container">
                        <Router>
                            <Link className="logo"
                                to="/"
                            >
                                <img alt="logo"
                                    className="logo-pc"
                                    src={logo}
                                />
                                <img alt="logo-mobile"
                                    className="logo-mobile"
                                    src={logoMobile}
                                />
                            </Link>
                        </Router>
                        <nav className="nav">
                            <div className="menu-index">
                                <span>首页</span>
                                <div className="icon-arrow"></div>
                            </div>
                            <ul className="nav-list">
                                <li className="nav-list-item">
                                    <span>首页</span>
                                </li>
                                <li className="nav-list-item">
                                    <span>沸点</span>
                                </li>
                                <li className="nav-list-item">
                                    <span>话题</span>
                                </li>
                                <li className="nav-list-item">
                                    <span>小册</span>
                                </li>
                                <li className="nav-list-item">
                                    <span>活动</span>
                                </li>
                            </ul>
                        </nav>
                        <div className="user-container">
                            <div className="search-input">
                                <div className="search-input-item">
                                    <input className="search-input_inner"
                                        onBlur={this.blurSearchInput}
                                        onFocus={this.focusSearchInput}
                                        placeholder="搜索掘金"
                                        ref={this.searchInput}
                                    />
                                    {
                                        this.state.isInputFocus ?
                                            <img alt="search"
                                                className="search-icon"
                                                src={searchFocus}
                                            /> :
                                            <img alt="search"
                                                className="search-icon"
                                                src={search}
                                            />
                                    }
                                </div>
                            </div>
                            <div className="button-drop">
                                <button className="add">
                                    <span>写文章</span>
                                </button>
                                <div className="drop-arrow"></div>
                                <ul className="drop-list"
                                    style={{ display: this.state.displayType }}
                                >
                                    <li className="drop-list-item">发布沸点</li>
                                    <li className="drop-list-item">分享链接</li>
                                </ul>
                            </div>
                            <div className="icon-msg">
                                <i className="iconfont icon-notification"></i>
                            </div>
                            <div className="icon-user">
                                <div className="icon-user-photo"
                                    style={{ backgroundImage: this.state.avatar }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
