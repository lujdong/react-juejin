import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Header from 'components/Header'

import routers from '@/router'

const App = () => {
    return (
        <Router>
            <Switch>
                <div className="view-container">
                    <Header />
                </div>
                {
                    routers.map(item => {
                        console.log('item: ', item)
                        return (
                            <Fragment key={item.path}>
                                <Redirect to={item.redirect} />
                                <Route component={item.component}
                                    path={item.path}
                                >
                                </Route>
                            </Fragment>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}

export default App
