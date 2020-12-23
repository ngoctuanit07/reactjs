import React from "react";
import ReactDOM from "react-dom";
/*
* JSX rules
* return single element
* div /section /article or Fragment
* use cameCase for html attribute
* className instead ofclass
* close every element
* formatting
* */
/*function Greeting(){
    return <h4>Hello world</h4>
}*/
const Greeting = () => {
    return React.createElement('div',{},React.createElement('h1',{},'hello world'));
}
ReactDOM.render(<Greeting/>,document.getElementById('root'));
