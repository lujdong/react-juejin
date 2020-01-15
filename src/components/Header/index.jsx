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

import styles from './Header.module.scss'
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.searchInput = React.createRef()

        this.state = {
            isInputFocus: false
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
            <div className={`${styles['header-container']} container`}>
                <header className={`${styles['main-header']} container`}>
                    <div className={`${styles['main-header-box']} flex-row container`}>
                        <Router>
                            <Link className={styles.logo}
                                to="/"
                            >
                                <img alt="logo"
                                    src={logo}
                                />
                                <img alt="logo-mobile"
                                    src={logoMobile}
                                    style={{ display: 'none' }}
                                />
                            </Link>
                        </Router>
                        <nav className={styles['nav']}>
                            <ul className={styles['nav-list']}>
                                <li className={styles['nav-list-item']}>
                                    <span>首页</span>
                                </li>
                                <li className={styles['nav-list-item']}>
                                    <span>沸点</span>
                                </li>
                                <li className={styles['nav-list-item']}>
                                    <span>话题</span>
                                </li>
                                <li className={styles['nav-list-item']}>
                                    <span>小册</span>
                                </li>
                                <li className={styles['nav-list-item']}>
                                    <span>活动</span>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles['user-container']}>
                            <div className={styles['search-input']}>
                                <div className={styles['search-input-item']}>
                                    <input className={styles['search-input_inner']}
                                        onBlur={this.blurSearchInput}
                                        onFocus={this.focusSearchInput}
                                        placeholder="搜索掘金"
                                        ref={this.searchInput}
                                    />
                                    {
                                        this.state.isInputFocus ?
                                            <img alt="search"
                                                className={styles['search-icon']}
                                                src={searchFocus}
                                            /> :
                                            <img alt="search"
                                                className={styles['search-icon']}
                                                src={search}
                                            />
                                    }
                                </div>
                            </div>
                            <div className={styles['button-drop']}>
                                <button className={styles['add']}>
                                    <span>写文章</span>
                                </button>
                                <div className={styles['drop-allow']}></div>
                                <ul className={styles['drop-list']}>
                                    <li className={styles['drop-list-item']}>发布沸点</li>
                                    <li className={styles['drop-list-item']}>分享链接</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
