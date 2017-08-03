import React, { Component } from 'react';

class ProjectItem extends Component {

  DeleteProject(id) {
    // console.log('test'); // Its working
    this.props.onDelete(id);
  }
  render() {
    console.log(this.props)
    return (
      <li className="Project">
          <strong>{this.props.project.title}</strong>: - {this.props.project.category} <a href="#"onClick={this.DeleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
