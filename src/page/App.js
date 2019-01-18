import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
/* onClick={() => {
    window.open('/head?id=1231')
}} */


import styles from './css/App.css';
console.log(styles, 'css')
class App extends Component {
    render() {
        return (
            <div className={styles.classNamea}  >
                <div className={styles.classNamea1}>123</div>
                <Link to="/head">t0 go head</Link>
            </div>
        );
    }
}
export default App;
