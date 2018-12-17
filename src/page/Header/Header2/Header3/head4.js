import React, { Component } from 'react';
// import Loadable from 'react-loadable';
// import withLoadable from './../../../../router/Loadable';
/* const LoadableMyComponent = function (comp) {
    return Loadable({
      loader: comp,
      loading: (props) => {
        if (props.error) {
          return <div>
            加载错误。请刷新
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
      timeout: 10000
    })
  } */
/*let LoadableMyComponent = Loadable({
   loader: () => import('./Head44'),
   loading: (props) => {
       if (props.error) {
           return <div>
               加载错误。请刷新
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
}); */

export default class MyComponent extends Component {
    state = { showComponent: false };

    onClick = () => {
        this.setState({ showComponent: true });
    };
    componentDidMount() {
        // withLoadable(() => import('./Head44'))
    }
    onMouseOver = () => {
        // console.log(this.props.withLoadable)
        // console.log(this.props.withLoadable2)
        // this.props.withLoadable.preload()
    };

    render() {
        // console.log(this.props, 'head4')

        return (
            <div>
                <button onClick={this.onClick} onMouseOver={this.onMouseOver}>
                    Show loadable component
          </button>
                {/* {this.state.showComponent && <LoadableMyComponent />} */}
            </div>
        )
    }
}