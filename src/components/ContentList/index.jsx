import React, { Component } from 'react'

import ContentItem from '../ContentItem'

import './ContentList.scss'

export default class ContentList extends Component {
    render() {
        return (
            <div className="content-list">
                <header className="filter-header">
                    <ul className="filter-list">
                        <li className="filter-item">
                            <span>热门</span>
                        </li>
                        <li className="filter-item">
                            <span>最新</span>
                        </li>
                        <li className="filter-item">
                            <span>热榜</span>
                        </li>
                    </ul>
                </header>
                <ContentItem />
            </div>
        )
    }
}
