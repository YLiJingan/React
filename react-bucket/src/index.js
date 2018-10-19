//import _ from 'lodash';
//import  React from 'react';
//import ReactDom from 'react-dom';
//import './style/style.css';

//  function component() {
//    var element = document.createElement('h1');
//
//    // lodash 是由当前 script 脚本 import 导入进来的
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//    element.classList.add('hello');
//
//    return element;
//  }

//class Hello extends React.Component {
//	render(){
//		return <h2>我是React生成的</h2>
//	}
//}
//document.getElementById('root').appendChild(<Hello/>);

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <h1>Hello, World!</h1>,
    document.getElementById('root')
);
