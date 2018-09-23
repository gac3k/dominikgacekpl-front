import React, {Component} from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {Intro} from './components/Intro';
import {Navigation} from './components/Navigation';
import {About} from './components/About';
import {Resume} from './components/Resume';
import {TechnologyStack} from './components/TechnologyStack';
import { translate, Trans } from "react-i18next";

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Numbers} from './components/Numbers';
import Work from './components/Work';
import Stack from './components/Stack';
import {HireMe} from './components/HireMe';

const theme = createMuiTheme({
    typography: {
        fontSize: '1em',
        fontFamily: [
            '"Work Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});


class App extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Intro/>
                    <Navigation i18n={this.props.i18n}/>
                    <About/>
                    <TechnologyStack/>
                    <Resume/>
                    <Numbers/>
                    <Work/>
                    <Stack/>
                    <HireMe/>
                    <Footer/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default translate('translations')(App);
