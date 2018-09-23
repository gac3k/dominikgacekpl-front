import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright text-center">
                                    <p>Made with ❤️ and hectoliters of coffee! <br /> &copy; {new Date().getFullYear()} Dominik Gacek</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="scroll-up">
                    <a href="#home"><i class="fa fa-angle-up"></i></a>
                </div>
            </div>
        );
    }
}
