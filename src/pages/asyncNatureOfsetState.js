import React, {Component} from 'react';

import AsyncNatureSubCopm from '../components/AsyncNatureOfsetState'

class AsyncNatureOfsetState extends Component {
    render(){
        return(
            <div>
                <h1 className="heading">Async Nature of setState()</h1>
                <AsyncNatureSubCopm />
            </div>
        )
    }
}

export default AsyncNatureOfsetState