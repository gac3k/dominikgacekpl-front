import React, {Component} from 'react';
import WorkHistory from '../mocks/Resume.mock';

export class Resume extends Component {

    constructor(props) {
        super(props);

        this.state = {workHistory: WorkHistory};
    }

    renderHistoryElement(index) {
        const workData = this.state.workHistory[index];
        const isInverted = (index % 2 === 0);
        console.log(index, isInverted);
        return (
            <li className={'timeline ' + (isInverted ? 'timeline-inverted' : '')}>
                <div className="posted-date">
                    <span className="month">{workData.period}</span>
                </div>

                <div className="timeline-panel wow fadeInUp">
                    <div className="timeline-content">
                        <div className="timeline-heading">
                            <h3>{workData.position}</h3>
                            {workData.company.length > 0 &&
                            <div>
                                <span>{workData.company}, {workData.place}</span>
                                <img src={'assets/images/logos/' + workData.image}  alt={workData.company + ' Logo'}/>
                            </div>
                            }
                        </div>

                        <div className="timeline-body">
                            <p dangerouslySetInnerHTML={{__html: workData.description}}></p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

    render() {
        return (
            <section id="resume" className="resume-section section-padding">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">Resume</h2>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="resume-title">
                                <h3>Experience</h3>
                            </div>
                            <div className="resume">
                                <ul className="timeline">
                                    {this.state.workHistory.map((object, i) => this.renderHistoryElement(i))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
