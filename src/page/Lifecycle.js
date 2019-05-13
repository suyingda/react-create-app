import React, { Component } from 'react'

export default class NewReactComponent extends Component {
    constructor(props) {
        super(props)
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {
         value:'1'
    }
    static getDerivedStateFromProps(props, state) { // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；;每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
       console.log('getDerivedStateFromProps',props,state)
        return state
    }
    componentDidCatch(error, info) { // 获取到javascript错误
           console.log('componentDidCatch')
    }
    render() {
        return (
            <h2>leftCycle</h2>
        )
    }
    componentDidMount() { // 挂载后
           console.log('componentDidMount 挂载后')
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
        console.log('getSnapshotBeforeUpdate  ')
    }
    componentDidUpdate() { // 组件更新后触发
        console.log('componentDidUpdate  ')
    }
    componentWillUnmount() { // 组件卸载时触发
        console.log('componentWillUnmount  ')
    }

}