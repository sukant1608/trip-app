import React, { Component } from 'react'
import { Input } from '@material-ui/core';
import { FormControl, Select, InputLabel, Button } from '@material-ui/core/';

import { connect } from 'react-redux'
import { addTrip } from '../store/action'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            date: '',
            type: '',
            choice: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        switch (e.target.value) {
            case '1':
                this.setState({ type: "Club", choice: 1 })
                break
            case '2':
                this.setState({ type: 'Trek', choice: 2 })
                break
            case '3':
                this.setState({ type: "Tropic", choice: 3 })
                break

        }
    }
    handleDateChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        const trip = {
            location: this.state.location,
            date: this.state.date,
            type: this.state.type
        }
        this.props.addTrip(trip)
        this.setState({
            location: '',
            date: '',
            type: '',
            choice: 0
        })
    }
    render() {
        return <>

            <div style={{ marginTop: '10%', width: '50%' }}>
                <center>
                    <h1>Add Trip</h1>
                </center>
                <Input name="location" onChange={this.handleDateChange} value={this.state.location} fullWidth={true} placeholder='Enter location' className="input-tag" /> <br /><br />
                <Input name="date" onChange={this.handleDateChange} fullWidth={true} type='date' className="input-tag" /> <br /><br />
                <FormControl fullWidth={true} variant="filled" >
                    <InputLabel htmlFor="filled-age-native-simple">Type</InputLabel>
                    <Select
                        native
                        value={this.state.choice}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'type',

                        }}
                    >
                        <option value={0}></option>
                        <option value={1}>Club</option>
                        <option value={2}>Trek</option>
                        <option value={3}>Tropic</option>
                    </Select>
                </FormControl>
                <br /><br />
                <center>

                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        </>
    }
}

const mapDispatchToProps = dispatch => {
    console.log("hello");
    return {
        addTrip: post => dispatch(addTrip(post))
    }
}

export default connect(null, mapDispatchToProps)(Add)