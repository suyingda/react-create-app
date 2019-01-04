import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hzindex extends Component {
    componentDidMount() {
        console.log(1)
        this.props.hudaye()
    }
    render() {
        console.log(this.props)
        return <div>123213</div>
    }
}
const mapStateToProps = ((state, props) => {
    const { shuju } = props.ModuleReduxThunk['Huzhi'];
    return {
        shuju: shuju(state),
    }
})

export default connect(mapStateToProps, mapDispatchToProps(['Huzhi']))(Hzindex);

