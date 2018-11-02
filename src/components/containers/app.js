import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as carbonIntensityActions from '../../store/carbon-intensity-reducer';
import CarbonIntensityWidget from '../presentational/carbon-intensity-widget'

class App extends Component {
    componentDidMount() {
        this.props.carbonIntensityActions.fetchIntensity();
    }

    render() {
        return (
            <div className="App">
                <h1>Great Britain's Carbon Intensity</h1>
                <CarbonIntensityWidget carbonIntensity={this.props.carbonIntensity} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    carbonIntensity: state.carbonIntensity
});

const mapDispatchToProps = dispatch => {
    return {
        carbonIntensityActions: bindActionCreators(carbonIntensityActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);