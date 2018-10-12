import React, { Component } from "react";
import Panel from "./Panel";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

class ProjectsPanel extends Component {
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
      <Panel title="Projects">
        <div className="table-responsive overview-table">
          <table className="table table-striped table-bordered">
            <tbody>
              {this.state.projects.map(function(project) {
                let today = moment();
                let date = moment(today).diff(project.ProjectStartDate, "days");
                project.ProjectStartDate = date;
                return (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>Active: {project.ProjectStartDate} Days</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to="/projects" className="btn btn-default form-control">
          View All Project Data
        </Link>
      </Panel>
    );
  }
}

export default ProjectsPanel;
