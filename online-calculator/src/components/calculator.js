import React, { Component } from 'react';
import axios from 'axios'

export default class Calculator extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeOperand1 = this.onChangeOperand1.bind(this);
      this.onChangeOperand2 = this.onChangeOperand2.bind(this);
      this.onChangeOperator = this.onChangeOperator.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        operand1: '',
        operand2: '',
        operator: '',
        operators: []
      }
    }

    componentDidMount() {
        this.setState({
            operators: ['+','-','*','/'],
            operator: '+'
        })
    }

    onChangeOperand1(e) {
        this.setState({
          operand1: e.target.value
        })
    }

    onChangeOperand2(e) {
        this.setState({
          operand2: e.target.value
        })
    }

    onChangeOperator(e) {
        this.setState({
          operator: e.target.value
        })
    }    

    onSubmit(e) {
        e.preventDefault();
        const data = {
          operand1: this.state.operand1,
          operand2: this.state.operand2,
          operator: this.state.operator
        }
    
        console.log(data);

        axios.post('http://localhost:5000/result/', data).then(res => console.log(res.data));
    }

    render() {
        return (
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Operator: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.operator}
                  onChange={this.onChangeOperator}>
                  {
                    this.state.operators.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Operand1: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.operand1}
                  onChange={this.onChangeOperand1}
                  />
            </div>
            <div className="form-group">
              <label>Operand2: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.operand2}
                  onChange={this.onChangeOperand2}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Compute" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
    }    
}