import React from 'react';

const Delivery = () => {
    const imagedata = [
        { src: "https://www.magnoliabakery.com/cdn/shop/files/website01_1_900x.png?v=1651012445", h5: "NationWide Shipping" },
        { src: "https://www.magnoliabakery.com/cdn/shop/files/website02_2_900x.png?v=1651012468", h5: "Advance Orders For Local PickUp" },
        { src: "https://www.magnoliabakery.com/cdn/shop/files/website03_900x.png?v=1651004898", h5: "Catering & Events" }
    ];

    return (
        <div className='container-fluid mt-5'>
            <div className='container'>
                 
                <h1 className='text-center fw-bold' style={{ color: "#013609" }}>Delivery and Pick Up Options</h1>
                <p className='text-center' style={{ color: "#013609" }}>
                    We make it easy for you to get Magnolia Bakery’s best, wherever you are. Order now for nationwide shipping,
                    <br /> place an order to pickup at your local shop, or get in touch with our team to arrange
                    <br /> custom catering for your next event.
                </p>
                <h6 className='d-flex justify-content-end  fw-bold my-5'> <span className='border-bottom border-dark'>LEARN MORE</span></h6>
                
            </div>
           <div className='container'>
                <div className="row g-0">
                    {imagedata.map((item, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="card h-100 border-0">
                                <img src={item.src} className="card-img-top" alt={item.h5} style={{ width: '100%', height: 'auto' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.h5}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Delivery;
