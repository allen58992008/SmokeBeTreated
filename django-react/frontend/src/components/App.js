import React, { Component } from 'react';
import { render }  from 'react-dom';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loaded: false,
        placeholder: "Loading"
      };
    }
    componentDidMount() {
        fetch("api/smoke")
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
      render() {
        return (
          <ul>
            {this.state.data.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name} - {contact.email}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    // export default App;

// const container = document.getElementById("app");
// render(<App />, container);
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
    // render(
    //         <Parent />,
    //         document.querySelector('#app')
    // )


class MyInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:''
        };
    }
    handleChange = (ev) =>{
        let val = ev.target.value;
        this.setState({
            msg:val
        });
    }
    render(){
        return (<div>
            <input type="text" onChange={this.handleChange} />
            <strong>{this.state.msg}</strong>
        </div>)
    }
}
const container = document.getElementById("app");
render(<MyInput />, container);