import React, {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import Sidebar from '../Sidebar';
import AsyncNatureOfsetState from '../../pages/asyncNatureOfsetState';

export default class Layout extends Component {
    render(){
        return(
            <div className="layout">
                <Router>
                    <Sidebar />
                    <div className="right-side-content">
                        <Switch>
                            <Route exact path={"/asyn-nature-of-set-state"} component={AsyncNatureOfsetState} />
                            {/* <Route exact path={"/user-management"} component={UserManagement} />
                            <Route exact path={"/issuance-statistics"} component={IssuanceStatistics} /> */}
                        </Switch>
                    </div>
                </Router>

                
            </div>
        )
    }
}
