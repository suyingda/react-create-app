# react-create-app

"client": "webpack --config ./config/webpack.client.js --display-used-exports  --optimize-minimize --colors --profile --progress",

--display-used-exports  --optimize-minimize

新的生命周期

Mounting（加载阶段：涉及4个钩子函数）
constructor()

加载的时候调用一次，可以初始化state
static getDerivedStateFromProps(props, state)

组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
render()

react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
componentDidMount()

组件渲染之后调用，只调用一次
Updating（更新阶段：涉及5个钩子函数)
static getDerivedStateFromProps(props, state)

组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state；配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
shouldComponentUpdate(nextProps, nextState)

组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
render()

react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
getSnapshotBeforeUpdate(prevProps, prevState)

触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法
componentDidUpdate()

组件加载时不调用，组件更新完成后调用
Unmounting（卸载阶段：涉及1个钩子函数）

组件渲染之后调用，只调用一次
Error Handling(错误处理)
componentDidCatch(error，info)

任何一处的javascript报错会触发