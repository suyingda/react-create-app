import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
// import Head1 from '../page/Header/head1'
// import MyComponent from '../router/Loadable'
import RouterModule from '../router/routerModule.js'
import { connect } from "react-redux";
// import PUB from '../module/ReduxHead'

class Head extends Component {
    constructor(arg) {
        super(arg);
        this.state = {
            // showComponent: this.props.match.path
        }
    }
    componentDidMount() { }
    render() {
        console.log(this.props, "head")
        return (
            <div>
                <h1><Link to="/">返回首页</Link> </h1>

                <div onClick={() => {
                    let data = {
                        id: 1,
                        name: '宿营'
                    };
                    this.props.routerGo(this, '/head1', data)
                }}>go to head1  base</div>
                <div onClick={() => {
                    let data = {
                        id: 1,
                        name: '宿营'
                    };
                    this.props.routerGo(this, '/head1', ['121'])
                }}>go to head1 noBase</div>
                <div onClick={() => {
                    let data = {
                        id: 1,
                        name: '宿营'
                    };
                    this.props.routerGo(this, '/head1', "单条数据")
                }}>go to head1 noBase</div>

                <RouterModule routes={this.props} />

                <h1 onClick={() => { this.props.aa() }}>11</h1>
                <h1 onClick={() => { this.props.bb() }}>22</h1>
                <h1 onClick={() => { this.props.cc() }}>33</h1>

            </div>
        );
    }
}

const mapStateToProps = ((state, props) => {
    // const { first1, first2, first3 } = PUB.reselect;
    const { first1, first2, first3 } = props.ModuleReduxThunk['ReduxHead'];
    // const { dd } = props.ModuleReduxThunk['ReduxHead1'];

    return {
        // ...state,
        first1: first1(state),
        first2: first2(state),
        first3: first3(state),

    }
})
// const { aa, bb, cc } = PUB.actions;
export default connect(mapStateToProps, mapDispatchToProps(['ReduxHead']))(Head);

