import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';
import WorkItems from '../mocks/Work.mock';

export default class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {portfolioItems: WorkItems};
    }

    render() {
        return (
            <section id="works" className="works-section section-padding">
                <div className="container">
                    <h2 className="section-title wow fadeInUp">Work</h2>

                    <div className="short-info fadeInUp text-center">
                        <h3>Use Cases</h3>
                    </div>

                    <ul className="list-inline" id="filter">
                        <li><a className="active" data-group="all">All</a></li>
                        <li><a data-group="design">Frontend</a></li>
                        <li><a data-group="interface">Backend</a></li>
                        <li><a data-group="identety">Mobile</a></li>
                    </ul>
                    <div class="row">
                        {this.state.portfolioItems.map(item =>
                            <div className={'col-lg-4 col-md-6 col-sm-12'}>
                                <PortfolioItem name={item.name} image={item.image}
                                               description={item.description}/>
                            </div>)}
                    </div>

                </div>
            </section>
        );
    }
}
