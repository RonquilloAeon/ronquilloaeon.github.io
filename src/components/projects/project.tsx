
import React, { FunctionComponent } from 'react';

import './project.scss';

type ProjectProps = {
    summary: string,
    title: string,
    url: string,
}

const Project: FunctionComponent<ProjectProps> = ({ summary, title, url }) => (<div className="project col-md-4">
    <header>
        <a target="_blank" href={url}>
            <h3>{title}</h3>
            <p>{summary}</p>
        </a>
    </header>
</div>);

export default Project;
