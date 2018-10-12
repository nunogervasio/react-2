import React, { Component } from "react";
import Panel from "./Panel";
import axios from "axios";
import { Link } from "react-router-dom";

class EmployeesPanel extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    axios
      .get("https://salty-lake-97518.herokuapp.com/employees")
      .then(res => {
        this.setState({
          employees: res.data
        });
      })
      .catch(err => {
        console.log("error");
      });
  }
  render() {
    return (
      <Panel title="Employees">
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <tbody>
              {this.state.employees.map(function(employee) {
                return (
                  <tr key={employee._id}>
                    <td>
                      {employee.FirstName} {employee.LastName}
                    </td>
                    <td>{employee.Position.PositionName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to="/employees" className="btn btn-default form-control">
          View All Employee Data
        </Link>
      </Panel>
    );
  }
}

export default EmployeesPanel;
