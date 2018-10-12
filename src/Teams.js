import React, { Component } from "react";
import MainContainer from "./MainContainer";
import axios from "axios";

class Teams extends Component {
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
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Projects</th>
                <th>Employees</th>
                <th>Team Lead</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teams.map(function(team) {
                return (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>
                      <ul>
                        {team.Projects.map(function(project) {
                          return (
                            <li key={project._id}>{project.ProjectName}</li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>{team.Employees.length} Employees</td>
                    <td>
                      {team.TeamLead.FirstName} {team.TeamLead.LastName}
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

export default Teams;
