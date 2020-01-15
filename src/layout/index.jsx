import React from 'react'

import Header from 'components/Header'
import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={styles['view-container']}>
            <Header />
            <main className={`${styles['main-container']}`}>
                <div className={styles['main-container-box']}>
                    <nav className={styles['nav-list']}>
                        nav-list
                    </nav>
                    <div className={styles['main-content-wrap']}>
                        <div className={styles['main-content']}>
                            <div className={styles['content-list']}>
                                <p>
                                    content-list
                                </p>
                                <p>
                                    content-list
                                </p>
                                <p>
                                    content-list
                                </p>
                                <p>
                                    content-list
                                </p>
                                <p>
                                    content-list
                                </p>
                                <p>
                                    content-list
                                </p>
                            </div>
                            <aside className={styles['index-aside']}>
                                <p>
                                    aside bar
                                </p>
                                <p>
                                    aside bar
                                </p>
                                <p>
                                    aside bar
                                </p>
                                <p>
                                    aside bar
                                </p>
                                <p>
                                    aside bar
                                </p>
                                <p>
                                    aside bar
                                </p>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout
