import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  DeleteProject(id) {
    this.props.onDelete(id);
  }
  
  render() {
    // eslint-disable-next-line
    let projectItems;
    if(this.props.projects){
      // eslint-disable-next-line
      projectItems = this.props.projects.map(project => {
      return (
        <ProjectItem onDelete={this.DeleteProject.bind(this)} key={project.title} project={project} />
      );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
          {projectItems}
      </div>
    );
  }
}

export default Projects;
