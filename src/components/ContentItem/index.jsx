import React, { Component } from 'react'

import zan from 'static/svg/zan.svg'
import share from 'static/svg/share.svg'
import comment from 'static/svg/comment.svg'

import './ContentItem.scss'

export default class ContentItem extends Component {
    render() {
        return (
            <>
                <div className="content-item">
                    <div className="content-item-box">
                        <div className="item-box">
                            <div className="item-row">
                                <ul className="info-list">
                                    <li className="info-item column">专栏</li>
                                    <li className="info-item user">前端小智</li>
                                    <li className="info-item">4小时前</li>
                                    <li className="info-item tag">
                                        <span className="info-item-tag">JavaScript</span>
                                        <span className="info-item-tag">面试</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-row item-title">React Hooks 实现和由来以及解决的问题</div>
                            <div className="item-row item-action">
                                <ul className="action-list">
                                    <li className="action-item">
                                        <img alt="likes"
                                            src={zan}
                                        />
                                        <span>10</span>
                                    </li>
                                    <li className="action-item">
                                        <img alt="comments"
                                            src={comment}
                                        />
                                        <span>12</span>
                                    </li>
                                    <li className="action-item">
                                        <img alt="share"
                                            src={share}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item-thumb"></div>
                    </div>
                </div>
                <div className="content-item">
                    <div className="content-item-box">
                        <div className="item-box">
                            <div className="item-row">
                                <ul className="info-list">
                                    <li className="info-item column">专栏</li>
                                    <li className="info-item user">前端小智</li>
                                    <li className="info-item">4小时前</li>
                                    <li className="info-item tag">
                                        <span className="info-item-tag">JavaScript</span>
                                        <span className="info-item-tag">面试</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-row item-title">React Hooks 实现和由来以及解决的问题</div>
                        </div>
                        <div className="item-thumb"></div>
                    </div>
                </div>
            </>
        )
    }
}
