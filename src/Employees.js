import React, { Component } from "react";
import MainContainer from "./MainContainer";
import axios from "axios";
import moment from "moment";

class Employees extends Component {
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
      <MainContainer sidebar="Employees">
        <h1 className="page-header">Employees</h1>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name & Positon</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Hire Date</th>
                <th>Salary Bonus</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(function(employee) {
                let hire = moment(employee.HireDate).format("LL");
                employee.HireDate = hire;
                return (
                  <tr key={employee._id}>
                    <td>
                      {employee.FirstName} {employee.LastName} -{" "}
                      {employee.Position.PositionName}
                    </td>
                    <td>
                      {employee.AddressStreet}, {employee.AddressCity}{" "}
                      {employee.AddressState}, {employee.AddressZip}
                    </td>
                    <td>
                      {employee.PhoneNum} ext: {employee.Extension}
                    </td>
                    <td>{employee.HireDate}</td>
                    <td>
                      ${employee.SalaryBonus}
                      .00
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </MainContainer>
    );
  }
}

export default Employees;
