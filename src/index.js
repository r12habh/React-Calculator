import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question: ' ',
            answer: ' '
        };
        this.someVariable = {
            question: ' ',
            answer: ' '
        }
        this.handleClick = this.handleClick.bind(this);
        this.abc = this.abc.bind(this);
    }

    handleClick(event){
        const value = event.target.value;
        console.log(value);
        switch (value){
            case '=':{
                if (this.state.question!=='')
                {
                    var ans='';
                    try
                    {
                        ans = eval(this.state.question);
                    }
                    catch(err)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans===undefined)
                    {
                        this.setState({answer: "Math Error"});
                    }
                    else
                    {
                        this.setState({answer: ans});
                        console.log(ans);
                    }
                    // console.log(ans);
                }
                break;
            }
            case 'AC':{
                this.setState({ question: '', answer: ''});
                break;
            }
            case 'bs':{
                var str = this.state.question;
                str = str.substr(0, str.length-1);
                this.setState({question: str});
                break;
            }
            
            default:{
                this.setState({question: this.state.question += value});
                break;
            }
        }
    }

    abc() {
        console.log('abc');
    }

    render(){
        console.log(this.state.answer);
        return(
            <div>
                <div className="calculator">
                    <div className="outputScreen" id="question" > {this.state.question} </div>
                    <div className="outputScreen" id="answer" > {this.state.answer} </div>
                    <Buttons handleClick = {this.handleClick}/>
                </div>
            </div>
        )
    }
}

// class Display extends React.Component{
//     render(){
//         return(
//             <div id={this.props.id} className="outputScreen"></div>
//         )
//     }
// }

class Buttons extends React.Component{
    render(){
        return(
            <div className="buttons">
                <button id="clear"  className="function"  value="AC" onClick={this.props.handleClick}>AC</button>
                <button id="neg"    className="function"  value='+/-' onClick={this.props.handleClick}><span>+/-</span></button>
                <button id="mod"    className="function"  value='%' onClick={this.props.handleClick}>&divide;</button>
                <button id="divide" className="operator"  value='bs' onClick={this.props.handleClick}>BS</button>
                
                <button id="seven"    value='7' onClick={this.props.handleClick}>7</button>
                <button id="eight"    value='8' onClick={this.props.handleClick}>8</button>
                <button id="nine"     value='9' onClick={this.props.handleClick}>9</button>
                <button id="multiply" className="operator" value='*' onClick={this.props.handleClick}> &times; </button>
            
                <button id="four"     value='4' onClick = {this.props.handleClick}>4</button>
                <button id="five"     value='5' onClick = {this.props.handleClick}>5</button>
                <button id="six"      value='6' onClick = {this.props.handleClick}>6</button>
                <button id="subtract" className="operator" value='‑' onClick={this.props.handleClick}>&minus;</button>
                
                <button id="one"      value='1' onClick={this.props.handleClick}>1</button>
                <button id="two"      value='2' onClick={this.props.handleClick}>2</button>
                <button id="three"    value='3' onClick={this.props.handleClick}>3</button>
                <button id="add"      className="operator" value='+' onClick={this.props.handleClick}>+</button>
            
                <button id="zero"     value='0' className='jumbo'onClick={this.props.handleClick}>0</button>
                <button id="decimal"  value='.' onClick={this.props.handleClick}>.</button>
                <button id="equals"   className="operator" value='=' onClick={this.props.abc}>=</button>
            </div>
        )
    }
}


ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
