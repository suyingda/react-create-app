import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import path from 'path';
const withLoadable = function (comp) {
  return Loadable({
    loader: comp,
    loading: (props) => {
      if (props.error) {
        return <div>
          <Link to='/'> 加载错误。请刷新</Link>
        </div>;
      } else if (props.timedOut) {
        return <div   >
          加载超时。请刷新
              </div>;
      } else if (props.pastDelay) {
        return <div loading={true} />;
      } else {
        return null;
      }
    },
    timeout: 10000,
    modules: comp,
  })
}
export default withLoadable;
/* const LoadableAnotherComponent = Loadable({
  loader: () => import('./../page/Head'),
  LoadingComponent: MyLoadingComponent,
  delay: 300
});
class MyComponent extends Component {
  render() {
    return <LoadableAnotherComponent />;
  }
}
export default MyComponent; */

// Dashboard
/* const LoadableDashboard = Loadable({
  loader: () => import('../Dashboard'),
  loading: Loading
});

export class Dashboard extends React.Component {
  render() {
    return <LoadableDashboard {...this.props}/>    // 传递props
  }
} */
