import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
// import Head3 from './Header2/head3'

import RouterModule from '../../router/routerModule.js';
import { connect } from 'react-redux';

// import ModuleHead1 from '../../module/Reduxhead1';

class Head1 extends Component {
    render() {
        console.log(this.props, 'head1')
        return <div>
            <h1 onClick={() => {
                this.props.ddd()
            }}>head1  onclik  </h1>
            <h1 onClick={() => {
                this.props.aa()
            }}>head1  onclik 2 </h1>
            <div onClick={() => {
                this.props.routerGo(this, '/head2')
            }}>go to head2</div>
            {/* <Link to="/head3">23</Link> */}

            <div> <RouterModule routes={this.props} /></div>
        </div>
    }
}

// export default Head1
const mapStateToProps = ((state, props) => {
    // const { first1, first2, first3 } = PUB.reselect;
    const { ddd } = props.ModuleReduxThunk['ReduxHead1'];
    const { first1, first2, first3 } = props.ModuleReduxThunk['ReduxHead'];
    // const { dd } = props.ModuleReduxThunk['ReduxHead1'];

    return {
        // ...state,
        first1: first1(state),
        first2: first2(state),
        first3: first3(state),
        ddd: ddd(state),


    }
})

// const { aa, bb, cc } = PUB.actions;
export default connect(mapStateToProps, mapDispatchToProps(['ReduxHead1', 'ReduxHead']))(Head1);
