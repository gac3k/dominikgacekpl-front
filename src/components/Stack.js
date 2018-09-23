import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Stack extends Component {

    technologyStack = [
        {
            name: 'PHP',
            image: 'php.png'
        },
        {
            name: 'Laravel',
            image: 'laravel-logo.png'
        },
        {
            name: 'Angular',
            image: 'angular.png'
        },
        {
            name: 'React',
            image: 'react.png'
        },
        {
            name: 'Symfony',
            image: 'symfony.png'
        },
        {
            name: 'MySQL',
            image: 'mysql.png'
        },
        {
            name: 'Postgres',
            image: 'postgres.png'
        },
        {
            name: 'MongoDB',
            image: 'mongo.png'
        },
        {
            name: 'Redis',
            image: 'redis.png'
        },
        {
            name: 'Amazon Web Services',
            image: 'aws.png'
        }
    ];

    render() {
        const settings = {
            dots: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            pauseOnHover: true,
            lazyLoad: 'onDemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section id={'skills'} className={'section-padding'}>
                <div className="container">
                    <h2 className="section-title wow fadeInUp">My Technologies</h2>
                    <Slider {...settings}>
                        {this.technologyStack.map(item =>
                            <div className={'stack-image-box'}>
                                <img src={'assets/images/stack/' + item.image}
                                     className={'image-grayscale'} alt={item.name}
                                     width={'100px'}/>
                            </div>
                        )}
                    </Slider>
                </div>
            </section>
        )
    }
}
