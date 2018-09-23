import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import {Trans} from 'react-i18next';

export class About extends Component {
    render() {
        return (
            <section id="about" className="about-section section-padding">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">About Me</h2>

                    <div className="row">

                        <div className="col-md-4 col-md-push-8">
                            <div className="biography">
                                <div className="myphoto">
                                    <img src="assets/images/photo.jpg" alt="My Photo"/>
                                </div>
                                <ul>
                                    <li><strong>Name:</strong> Dominik Gacek</li>
                                    <li><strong>Date of birth:</strong> 07 Sep 1992</li>
                                    <li><strong>Location:</strong> Rzeszów, Poland</li>
                                    <li><strong>Nationality:</strong> Polish</li>
                                    <li><strong>Phone:</strong> (+48) 697 828 947</li>
                                    <li><strong>Email:</strong> contact@dominikgacek.pl</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-md-pull-4">
                            <div className="short-info wow fadeInUp">
                                <h3>Who Am I?</h3>
                                <p>
                                    I am 26 years old guy, for whom the programming is not only the simple career path,
                                    but also one of the biggest passions in my life. I love to create things from scratch, just because it's simply amazing to create something out of nothing.
                                </p>

                                <p>
                                    Driven by hectoliters of coffee, day by day I am fighting with bugs, deadlines and server crashes...
                                    and trust me, I would not have change it for anything in the whole world.
                                </p>
                            </div>

                            <div className="short-info wow fadeInUp">
                                <h3>What I Do ?</h3>
                                <p>
                                    Within over 7 years of my Professional career as a web application developer,
                                    I think that I can say that I have encountered almost every possible kind of project.
                                </p>

                                <p>
                                    From the beginning <strong>of the 2018 I am working as a freelance contractor</strong>
                                    and I am eager to help you and your project in any of the areas listed below.
                                </p>

                                <ul className="list-check">
                                    <li>PHP Development</li>
                                    <li>Node.JS Development</li>
                                    <li>Angular Development</li>
                                    <li>Swift Development</li>
                                    <li>Team Management</li>
                                    <li>Unix Administration</li>
                                    <li>HTML & CSS Development</li>
                                    <li>SCRUM Master</li>
                                </ul>
                            </div>

                            <div className="my-signature">
                                <img src="assets/images/sign-gray.png" style={{width: '130px'}} className="img-responsive"
                                     alt="sign"/>
                            </div>
                            <div className="download-button">
                                <Button variant="outlined" color="default" size={'large'} style={{marginRight: '20px'}} onClick={() => this.hireMeForm()}>
                                    <i className="fa fa-paper-plane" style={{paddingRight: '10px'}}></i> <Trans i18nKey={'talkNow'}>Let's Discuss a Project!</Trans>
                                </Button>

                                <Button variant="outlined" color="primary" size={'large'} onClick={() => window.location.href = 'assets/pdf/Dominik_Gacek_CV_Updated.pdf'}>
                                    <i className="fa fa-download" style={{paddingRight: '10px'}}></i> <Trans i18nKey={'cvDownload'}>Download My Cv</Trans>
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        )
    }
}
