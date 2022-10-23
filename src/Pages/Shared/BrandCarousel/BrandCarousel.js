import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand01 from '../../../assets/brands/Brand01.png';
import Brand02 from '../../../assets/brands/Brand02.png';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand01}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand02}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;