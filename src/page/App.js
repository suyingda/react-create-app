import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
/* onClick={() => {
    window.open('/head?id=1231')
}} */
class App extends Component {
    render() {
        return (
            <div>
                
                <Link to="/head">t0 go head</Link>
            </div>
        );
    }
}
export default App;
