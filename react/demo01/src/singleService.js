import React, { Component } from 'react';

class Single extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
      this.props.removeService(this.props.index)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.content === this.props.content)
        if(nextProps.content === this.props.content){
            return false
        }else {
            return true
        }
    }
    render() { 
        console.log('child-render')
        return ( 
            <li
                    onClick={this.handleClick}
                    dangerouslySetInnerHTML={{__html:this.props.content}}
                >

            </li>)
        ;
    }
}
export default Single