import React, {Component} from 'react';

export class Numbers extends Component {
    render() {
        return (
            <section id="facts" className="facts-section text-center" data-stellar-vertical-offset="50"
                     data-stellar-background-ratio="0.2">
                <div className="tt-overlay-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="count-wrap">
                                    <div className="col-sm-3 col-xs-6">
                                        <i className="fa fa-calendar-o"></i>
                                        <h3><span className="timer">7</span>+</h3>
                                        <p>Years of Experience</p>
                                    </div>
                                    <div className="col-sm-3 col-xs-6">
                                        <i className="fa fa-briefcase"></i>
                                        <h3><span className="timer">60</span>+</h3>
                                        <p>Projects Done</p>
                                    </div>
                                    <div className="col-sm-3 col-xs-6">
                                        <i className="fa fa-code-fork"></i>
                                        <h3><span className="timer">20</span>+</h3>
                                        <p>Languages & Technologies</p>
                                    </div>
                                    <div className="col-sm-3 col-xs-6">
                                        <i className="fa fa-hand-o-up"></i>
                                        <h3><span className="timer">40</span>+</h3>
                                        <p>Skill Confirmations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
