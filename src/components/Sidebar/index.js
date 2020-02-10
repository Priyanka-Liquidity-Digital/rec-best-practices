import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li><Link to="/asyn-nature-of-set-state">Async Nature Of setState() </Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar