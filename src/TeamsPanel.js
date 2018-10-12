import React, { Component } from "react";
import Panel from "./Panel";
import axios from "axios";
import { Link } from "react-router-dom";

class TeamsPanel extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    axios
      .get("https://salty-lake-97518.herokuapp.com/teams")
      .then(res => {
        this.setState({
          teams: res.data
        });
      })
      .catch(err => {
        console.log("error");
      });
  }
  render() {
    return (
      <Panel title="Teams">
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <tbody>
              {this.state.teams.map(function(team) {
                return (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>{team.Employees.length} Employees</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to="/teams" className="btn btn-default form-control">
          View All Team Data
        </Link>
      </Panel>
    );
  }
}

export default TeamsPanel;
