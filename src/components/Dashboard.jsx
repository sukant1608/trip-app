import React, { Component } from 'react'
import { WbSunny, FilterHdr, LocalCafe, CardTravel } from '@material-ui/icons/';
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            tropic: 0,
            club: 0,
            trek: 0
        }
    }
    componentDidMount() {
        const list = this.props.list
        const a = list.length
        var b = 0
        var c = 0
        var d = 0
        var i = 0
        for (i = 0; i < a; i++) {
            if (list[i].type === 'Tropic') {
                b++;
            } else if (list[i].type === 'Club') {
                c++
            } else {
                d++
            }
        }
        this.setState({ total: a, tropic: b, club: c, trek: d })
    }
    render() {
        return <div style={{ marginTop: '10%' }} className='trips-stats'>
            <h1 style={{ marginLeft: '20%' }}>{this.state.total}<p>trips<CardTravel /></p></h1>
            <div className='trips-stats' >

                <h1 style={{ display: 'inline' }}>{this.state.tropic}<p style={{ display: 'inline' }}> <WbSunny /> </p></h1>
                <h1>{this.state.trek}<p> <FilterHdr /> </p></h1>
                <h1>{this.state.club}<p> <LocalCafe /> </p></h1>
            </div>
        </div>
    }
}

export default connect(store => ({ list: store.trip }))(Dashboard)