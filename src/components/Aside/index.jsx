import React, { Component } from 'react'
import PropTypes from 'prop-types'

import lv2 from 'static/svg/lv-2.svg'

import './Aside.scss'
export default class Aside extends Component {
    render() {
        const { showHeader, showFooter, headerText, footerText, cardType } = this.props
        return (
            <aside className="sidebar-block">
                {
                    showHeader &&
                    <header className="header-block">
                        <span className="header-block-title">{headerText}</span>
                    </header>
                }
                <ul className="block-list">
                    <li className="item">
                        {
                            cardType === 'link' &&
                            <div className="item-content link">
                                <div className="item-picture"></div>
                                <div className="item-info">
                                    <div className="info-row title">
                                        <span>受刺激</span>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            cardType === 'book' &&
                            <div className="item-content book">
                                <div className="item-picture"></div>
                                <div className="item-info">
                                    <div className="info-row title">
                                        <span>SVG 动画开发SVG 动画开发实战手册SVG 动画开发实战手册实战手册</span>
                                    </div>
                                    <div className="info-row info book-info">
                                        <span className="count">700人已购买</span>
                                        <span className="info-btn">试读</span>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            cardType === 'user' &&
                            <div className="item-content author">
                                <div className="item-picture"></div>
                                <div className="item-info">
                                    <div className="info-row title">
                                        <span>糖小梦</span>
                                        <img alt="lv"
                                            src={lv2}
                                        />
                                    </div>
                                    <div className="info-row info">全干工程师</div>
                                    <div className="info-row info">前端领域贡献者</div>
                                </div>
                            </div>
                        }
                    </li>
                </ul>
                {
                    showFooter &&
                    <footer className="footer-block">
                        <div className="item">
                            <span>{footerText}</span>
                            <i className="iconfont icon-right"></i>
                        </div>
                    </footer>
                }
            </aside>
        )
    }
}

Aside.propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    headerText: PropTypes.string,
    footerText: PropTypes.string,
    cardType: PropTypes.oneOf(['link', 'user', 'book']).isRequired
}
