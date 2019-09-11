import React,{Component,Fragment} from 'react'
import Single from './singleService'
import {deepClone} from "../public/tool";
import axios from 'axios'
import './service.css'
class Service extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      serviceList: ['基础按摩','泰式马杀鸡']
    }
    this.addService = this.addService.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.removeService = this.removeService.bind(this)
  }
  
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  // componentWillMount() {
  //   console.log('componentWillMount----')
  // }
  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res)=>{
        console.log(res)
      })
  }
  addService(event){
    this.setState({
      inputValue: '',
      serviceList: [...this.state.serviceList,this.state.inputValue]
    })
  }
  changeInputValue(event){
    this.setState({
      inputValue: event.target.value
    })
  }
  removeService(index) {
    console.log(this)
    let list = deepClone(this.state.serviceList)
    list.splice(index,1)
    this.setState({
      serviceList:list
    })
    setTimeout(()=>{
      console.log(this.state.serviceList)
    })
  }
  render(){
    console.log('render----')
    return (
      // flex
      <Fragment>
        <div>
          <label htmlFor="input">服务</label>
          <input className='input' id="input" value={this.state.inputValue} onChange={this.changeInputValue}></input> <button onClick={this.addService}>增加服务</button>
          <ul>
            {this.state.serviceList.map((item,index) => {
              return(
                <Single key={index}
                        index={index}
                        content={item}
                        removeService={this.removeService}
                >

                </Single>)
            })}
          </ul>
        </div>
      </Fragment>

    )
  }
}
export default Service