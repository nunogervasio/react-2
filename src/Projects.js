import React, { Component } from "react";
import MainContainer from "./MainContainer";
import axios from "axios";
import moment from "moment";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    axios
      .get("https://salty-lake-97518.herokuapp.com/projects")
      .then(res => {
        this.setState({
          projects: res.data
        });
      })
      .catch(err => {
        console.log("error");
      });
  }
  render() {
    return (
      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(function(project) {
                let start = moment(project.ProjectStartDate).format("LL");
                project.ProjectStartDate = start;
                let end;
                if (project.ProjectEndDate === null) {
                  end = "n/a";
                } else {
                  end = moment(project.ProjectEndDate).format("LL");
                }
                project.ProjectEndDate = end;
                return (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>
                    <td>{project.ProjectStartDate}</td>
                    <td>{project.ProjectEndDate}</td>
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

export default Projects;
