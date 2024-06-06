import React from 'react';

const Input = () => {
    return (
        <div className='container-fluid little-dots d-flex align-items-center  justify-content-center ' style={{ width: '100%', height: '350px', marginTop: '0px' }}>
            <div className='text-center' style={{ padding: '10px' }}>
                <h1 className='fw-bold'>Join our Newsletter</h1>
                <p>
                    Get the freshest Magnolia Bakery updates and offers right to your inbox!
                    <br />
                    Plus, enjoy 10% off on your birthday when you share the date with us!
                </p>

                <div className="d-flex justify-content-center">
                    <div className='input-group mt-3' style={{ maxWidth: '600px' }}>
                        <input type='text' className='form-control border border-dark rounded-1 position-relative w-100' placeholder='ENTER YOUR EMAIL ADDRESS' style={{ width: '900px' }}/>
                        <div className='position-absolute end-0 top-50 translate-middle-y'>
                            <i className='fa-solid fa-arrow-right px-2'></i>
                        </div>
                    </div>
                </div>
  

        </div>



        </div>
    );
}

export default Input;


