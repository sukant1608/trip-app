import React, { Component } from 'react'
import { EventNote, Home, GridOn } from '@material-ui/icons';

import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import List from '../components/List';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState({ active: e })
    }
    render() {
        const { active } = this.state
        return <div className="container">
            <div className="menu">
                <  Home fontSize="large" className="menu-icon" onClick={() => this.handleClick(1)} /><br /> <br />
                <  EventNote fontSize="large" className="menu-icon" onClick={() => this.handleClick(2)} /><br /> <br />
                <  GridOn fontSize="large" className="menu-icon" onClick={() => this.handleClick(3)} /><br /> <br />
            </div>
            <div className="screen">
                {active === 1 && <Dashboard />}
                {active === 2 && <Add />}
                {active === 3 && <List />}
            </div>
        </div>
    }
}

export default HomePage