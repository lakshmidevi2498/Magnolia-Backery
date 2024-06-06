import React from 'react';

const Banner = () => {
    return (
        <div className='container-fluid mt-4 '>
            <div className='row' style={{ minHeight: '360px' }}>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center' style={{ background: '#f7c0c3' }}>
                    <div className='text-center'>
                        <h1 className='fw-bold' style={{ color: '#581b28' }}>Catering, Gifting &<br />Events</h1>
                        <p className='mt-1'>
                            Our catering, gifting and events team is ready to fill your event or<br />
                            celebration with a custom selection of Magnolia Bakery’s best<br />
                            creations. No occasion is too large—or too small!
                        </p>
                        <button className='btn p-2 mt-2 mb-2 ' style={{ background: '#581b28', color: '#f7c0c3' }}>GET STARTED</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-0'>
                    <img 
                        src="https://www.magnoliabakery.com/cdn/shop/files/website02_1280x.png?v=1651002817"  
                        className='img-fluid' 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        alt="Catering, Gifting & Events" 
                    />
                </div>
            </div>
        </div>
    );
}
export default Banner;


