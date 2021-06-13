import React, { Component } from 'react'
import { FormGroup, FormControlLabel, Checkbox, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core/';
import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trek: true,
            tropics: true,
            club: true
        }
        console.log(this.props.list);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        switch (e.target.name) {
            case 'A':
                this.setState({ trek: !this.state.trek })
                break
            case 'B':
                this.setState({ tropics: !this.state.tropics })
                break
            case 'C':
                this.setState({ club: !this.state.club })
                break
            default:
                console.log(e.target.name);
        }
    }
    handleTrek(element) {
        if (element.type === 'Trek') {
            return <TableRow >
                <TableCell >{element.location}</TableCell>
                <TableCell >{element.date}</TableCell>
                <TableCell >{element.type}</TableCell>
            </TableRow>
        }
    }
    handleTropics(element) {
        if (element.type === 'Tropic') {
            return <TableRow key="key">
                <TableCell >{element.location}</TableCell>
                <TableCell >{element.date}</TableCell>
                <TableCell >{element.type}</TableCell>
            </TableRow>
        }
    }
    handleClub(element) {
        if (element.type === 'Club') {
            return <TableRow >
                <TableCell >{element.location}</TableCell>
                <TableCell >{element.date}</TableCell>
                <TableCell >{element.type}</TableCell>
            </TableRow>
        }
    }
    render() {
        return <div style={{ marginTop: '10%', width: '50%' }}>
            <center>
                <h1>List Of trips</h1>
                <div style={{ marginLeft: '15%' }}>

                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.trek}
                                    onChange={this.handleChange}
                                    name="A"
                                    color="primary"
                                />
                            }
                            label="Trek"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.tropics}
                                    onChange={this.handleChange}
                                    name="B"
                                    color="primary"
                                />
                            }
                            label="Tropics"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.club}

                                    onChange={this.handleChange}
                                    name="C"
                                    color="primary"
                                />
                            }
                            label="Club"
                        />
                    </FormGroup>
                </div>
            </center>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Location</TableCell>
                            <TableCell >Date</TableCell>
                            <TableCell >Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.trek && this.props.list.map((trip) => this.handleTrek(trip))}
                        {this.state.tropics && this.props.list.map((trip) => this.handleTropics(trip))}
                        {this.state.club && this.props.list.map((trip) => this.handleClub(trip))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    }
}

export default connect(store => ({ list: store.trip }))(List)