import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 2. 创建 虚拟DOM
// 参数1：元素名称  参数2：元素属性对象(null表示无)  参数3：当前元素的子元素string||createElement() 的返回值
const divD = React.createElement("div",{
  title: 'hello react'
},'hello React!!!')
ReactDOM.render(
  divD,
  document.getElementById('root')
);
