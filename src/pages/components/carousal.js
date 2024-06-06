import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {

    const CustomPrevArrow = (onClickHandler, hasPrev, label) => {
        return (
            hasPrev && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="custom-prev-arrow "
                >
                    <i className="fa-solid fa-chevron-left "></i>
                </button>
            )
        );
    };
    
    const CustomNextArrow = (onClickHandler, hasNext, label) => {
        return (
            hasNext && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="custom-next-arrow position-absolute"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )
        );
    };
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            renderArrowPrev={CustomPrevArrow}
            renderArrowNext={CustomNextArrow}
        >
            <div className='row p-0'>
            <div className=" carousel-slide  " >
                <img src="./assets/images/corousal1.webp" alt="Slide 1" className="background-img position-relative" />
                <div className='container d-none d-md-block'>
                <div className="row content ">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 curve p-1 p-ls-4 position-absolute ">
                        <h1 className="fs-2 mt-5 p-2">Magnolia Bakery is now in Grocery Stores!</h1>
                        <p className="mt-2  ">From our NYC neighborhood bakery to your grocery store shelf, indulge in soft-baked cookies inspired by our world-famous Banana Pudding.</p>
                        <button className="btn my-2 m-auto d-block" style={{ background: "#013609", color: '#bae8d4' }}>LEARN MORE</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="carousel-slide  ">
                <img src="./assets/images/corousal2.jpg" alt="Slide 2" className="background-img position-relative" />
                <div className='container d-none d-md-block'>
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 curve p-1 p-md-2 p-ls-4 position-absolute" style={{ background: '#bae8d4' }}>
                        <h1 className="fs-2 mt-5 p-0 p-md-1">World-Famous Banana Pudding</h1>
                        <p className="mt-3 ">Our not-so-well-kept secret: We make the world’s best banana pudding. Layers of fresh bananas, vanilla wafers, and creamy pudding await, along with exclusive specialty flavors.</p>
                        <button className="btn my-2 m-auto d-block" style={{ background: "#013609", color: '#bae8d4' }}>SHOP BANANA PUDDING</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="carousel-slide  ">
                <img src="./assets/images/corousal.webp" alt="Slide 3" className="background-img position-relative"  />
                <div className='container d-none d-md-block'>
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 curve p-1 p-ls-4 position-absolute" style={{ background: '#bae8d4' }}>
                        <h1 className="fs-2 mt-5">Banana Pudding Variety</h1>
                        <p className="mt-3 ">3 flavors. 6 cups. Endlessly delicious. Enjoy this online exclusive of our favorite world-famous Banana Pudding flavors in one multipack.</p>
                        <button className="btn my-2 m-auto d-block" style={{ background: "#013609", color: '#bae8d4' }}>SHOP NOW</button>
                    </div>
                </div>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;

