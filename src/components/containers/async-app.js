import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as carbonIntensityActions from '../../store/carbon-intensity-reducer'
import "../../app.css";

class AsyncApp extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.carbonIntensityActions.fetchIntensity();
    }

    render() {
        let intesity = this.props.carbonIntensity && this.props.carbonIntensity.details && this.props.carbonIntensity.details.intensity.actual;

        return (
            <div className="App">
                <h1>UK Carbon Intensity: {intesity} gCO<sub>2</sub>/kWh</h1>
                <ul>
                    <li>Request Pending: {this.props.carbonIntensity.pending ? 'true' : 'false'}</li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);