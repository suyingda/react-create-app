
import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

import { RouteWithSubRoutes, newRouter } from "../../../router/router";
import RouterModule from '../../../router/routerModule.js';
import {connect } from 'react-redux'
// import PUB from '../../../module/ReduxHead'
class Head2 extends Component {
    render() {
        console.log(this.props, 'head2')
        return <div>
            <div onClick={() => {
                this.props.routerGo(this, '/head/head1')
            }}>go to head1</div>
            <div onClick={() => {
                this.props.routerGo(this, '/head3')
            }}>go to head3</div>
            <div onClick={() => {
                this.props.routerGo(this, '/head4')
            }}>go to head4</div>
            {/* <Link to="/head3">23</Link> */}

            <div> <RouterModule routes={this.props} /></div>
        </div>
    }
}

export default Head2;
/* const mapStateToProps = ((state, props) => {
    const { first1, first2, first3 } = PUB.reselect;
    return {
        // ...state,
        first1: first1(state),
        first2: first2(state),
        first3: first3(state),
    }
})
const { aa, bb, cc } = PUB.actions;
export default connect(mapStateToProps, {
    aa,
    bb,
    cc
})(Head2);
 */