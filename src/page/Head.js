import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
// import Head1 from '../page/Header/head1'
// import MyComponent from '../router/Loadable'
import RouterModule from '../router/routerModule.js'
import { connect } from "react-redux";

import styles from './less/less.less';
console.log(styles, 'less')

import { Button,Input } from 'antd';

// import PUB from '../module/ReduxHead'
let timer1 = undefined;
class Head extends Component {
    constructor(arg) {
        super(arg);
        this.state = {
            sss: {}
            // showComponent: this.props.match.path
        }
    }
    componentDidMount() {
        console.log(this.props)
        // timer1 = setInterval(() => {
        //     console.log(1)
        // }, 1555)
        // this.state.sss[1] = array2
        // this.state.sss[1]()
        // console.log(this.state.sss, 'ssss')
    }
    render() {
        console.log(this.props, "head")
        return (
            <div className={styles.lessClass} >
                <Button type="primary">Primary</Button>
                <Input size="large" placeholder="large size" />
                {/* <div> */}
                <div className={styles.lessChrilen} onClick={
                    // <h1  onClick={
                    () => {
                        // this.props.asApi()
                        this.props.asApi().then((v) => {
                            console.log(v)
                        })
                    }
                }>666666666

                </div>
                <a href="http://172.254.68.158:9000/custinfo/get_shareholder?custid=null&_='+(new Date()).getTime().toString()">adsf dsaf </a>
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
    const { first1, first2, first3, shuju } = props.ModuleReduxThunk['ReduxHead'];
    // const { dd } = props.ModuleReduxThunk['ReduxHead1'];

    return {
        // ...state,
        shuju: shuju(state),
        first1: first1(state),
        first2: first2(state),
        first3: first3(state),

    }
})
// const { aa, bb, cc } = PUB.actions;
export default connect(mapStateToProps, mapDispatchToProps(['ReduxHead']))(Head);



