import React, {Component} from 'react';

export class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { t, i18n } = this.props;

        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };

        return (
            <header className="header">
                <nav className="navbar navbar-custom" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#custom-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="custom-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#resume">Resume</a></li>
                                <li><a href="#works">Works</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contact"><span style={{color: '#52b3d9'}}>Let's Talk</span></a></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><a onClick={() => changeLanguage('pl')}><span className="flag-icon flag-icon-pl"></span></a></li>
                                <li><a onClick={() => changeLanguage('en')}><span className="flag-icon flag-icon-gb"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>)
    }
}
