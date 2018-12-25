import React, { Component } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div  onClick={()=>{
                window.open('/head?id=1231')
            }}>
            3213231
                <Link to="/head?id=1&idd=2">t0 go head</Link>
            </div>
        );
    }
}
export default App;
