import axios from 'axios';
import React from 'react';

import Project from './project';

type ProjectsState = {
    projects: object[],
}

class Projects extends React.Component<{}, ProjectsState> {
    state = {
        projects: [],
    }

    async componentDidMount() {
        const response = await axios.get("https://gitconnected.com/v1/portfolio/ronquilloaeon");
        this.setState({ projects: response.data.projects });
    }

    render() {
        const { projects } = this.state;

        if (projects.length === 0) {
            return (
                <div>
                    <p>No projects to display</p>
                </div>
            );
        }

        return (
            <div className="section">
                <div id="projects" className="container">
                    <div className="row">
                        <div className="col">
                            <header>
                                <h2 className="color-champagne">Projects</h2>
                            </header>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.projects.map(
                                (project: any, idx) => <Project 
                                    key={idx}
                                    summary={project.summary}
                                    title={project.name}
                                    url={project.website}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
