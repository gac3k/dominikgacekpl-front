import React, {Component} from 'react';
import {CSSTransitionGroup} from 'react-transition-group'
import '../styles/Intro.css';

import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import { Trans } from 'react-i18next';

export class Intro extends Component {

    links = [
        {
            title: <Trans>My Twitter</Trans>,
            type: 'twitter',
            url : 'https://twitter.com/ChybaTakAleNie'
        },
        {
            title: <Trans>My GitHub</Trans>,
            type: 'github',
            url: 'https://github.com/gac3k'
        },
        {
            title: <Trans>My Dear LinkedIn</Trans>,
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/dominik-gacek-80264597/'
        },
        {
            title: <Trans>My Instagram</Trans>,
            type: 'instagram',
            url: 'https://www.instagram.com/magiczny_domino/'
        }
    ];

    positionsList = [
        'Node.JS Developer',
        'PHP Developer',
        'Angular Developer',
        'Web Developer',
        'Swift Developer',
        'Project Manager',
        'Dev Ops'
    ];

    constructor(props) {
        super(props);

        this.state = {currentPosition: this.positionsList[0]};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changeDisplayedPosition(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeDisplayedPosition() {
        let nextIndex = this.positionsList.indexOf(this.state.currentPosition) + 1;
        if (nextIndex >= this.positionsList.length) {
            nextIndex = 0;
        }

        this.setState({
            currentPosition: this.positionsList[nextIndex]
        });
    }

    presentPosition() {
        const data = this.state.currentPosition.split(' ');

        return (
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={300}
                transitionLeave={false}>
                <h1 id="position-list" key={data[0]}>{data[0]} <span>{data[1]}</span></h1>
            </CSSTransitionGroup>
        )
    }

    hireMeForm() {
        alert('Plese write to my email: contact@dominikgacek.pl');
    }

    render() {
        return (
            <section id="home" className="tt-fullHeight" data-stellar-vertical-offset="50"
                     data-stellar-background-ratio="0.2">
                <div className="intro">
                    <div className="intro-sub"><Trans i18nKey={'welcomeMessage'}>Hi I'm Dominik</Trans></div>
                    {this.presentPosition()}
                    <p>
                        <Trans i18nKey={'introductionMessage'}>
                        If you are looking for experienced, creative and responsible full stack developer.<br/>
                        Well... Here is a <strong>good news</strong>. You do not have to look any longer!<br/>
                        I am here to help you, let's build something awesome together!
                        </Trans>
                    </p>

                    <div className="social-icons">
                        <ul className="list-inline">
                            {this.links.map((object, i) => <Tooltip key={object.url} style={{fontSize: '18px !important'}} title={object.title}><li><a href={object.url} target={"_blank"}><i className={'fa fa-' + object.type}></i></a></li></Tooltip> )}
                        </ul>
                    </div>

                    <div className="text-center" style={{margin: '50px 0'}}>
                        <Button variant="contained" style={{fontSize: '12px'}}  color="secondary" size={'large'} onClick={this.hireMeForm}>
                            <Trans i18nKey={'talkNow'}>Let's Talk Now!</Trans>
                        </Button>
                    </div>
                </div>

                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>
            </section>
        )
    }
}
