import React, { Component } from 'react';
import axios from 'axios';

const Historyprop = props => (
    <tr>
      <td>{props.history.operand1}</td>
      <td>{props.history.operator}</td>
      <td>{props.history.operand2}</td>
      <td>{props.history.result}</td>
    </tr>
)

export default class History extends Component {
    constructor(props) {
      super(props);
  
      this.state = {histories: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/history/')
          .then(response => {
            this.setState({ histories: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    historyList() {
        return this.state.histories.map(currenthistory => {
          return <Historyprop history={currenthistory} key={currenthistory._id}/>;
        })
    }

    render() {
        return (
          <div>
            <h3>Logged Histories</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Operand1</th>
                  <th>Operator</th>
                  <th>Operand2</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                { this.historyList() }
              </tbody>
            </table>
          </div>
        )
    }
}
