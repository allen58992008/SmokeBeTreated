import React, { Component } from 'react';
import { render }  from 'react-dom';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        };
    }
    handleClick = () => {
        this.setState({
            show:!this.state.show
        });
    }
    render(){
        let showStr = this.state.show ? 'block':'none';
        return (<div>
            <input onClick={this.handleClick} type="button" value="按钮" />
            <div className="box" style={{display:showStr}} />
        </div>)
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'from child msg'
        };
    }
    componentDidMount(){
        this.props.fnCallback(this.state.msg);
    }

    render(){
        return (<div>
            <h3 >我是子级 ->{this.state.msg}</h3>
        </div>)
    }
}
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        };
    }
    getMsg =(msg) =>{
        this.setState({
            msg:msg
        });
    }
    render(){
        return (
           <div>
              <h3>我是父级 -> {this.state.msg || '没有数据'}</h3>
              <Child fnCallback={this.getMsg}/>
           </div>
         )
    }
}
render(
        <Parent />,
        document.querySelector('#app')
)
export default Toggle;
const container = document.getElementById("app");
render(<Toggle />,container);