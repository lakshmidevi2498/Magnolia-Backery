
import {  useNavigate } from 'react-router-dom';


    const Component3 = ({data}) => {
        const navigator = useNavigate();

        const handleInnerData = (innerData) => {
            const innerdata=JSON.stringify(innerData)
          localStorage.setItem('innerImages',innerdata);
           navigator('/innerproducts')
        }

    return (
        <>
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                    {data.map((item, index) => (
                        <div className="col text-center " key={index} onClick={() => handleInnerData(item.innerImgs)}>
                            <div className="card-container">
                                <img src={item.image} className="card-img-top rounded-1 " alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>                            
                           <div className="" style={{color: "#013609"}}>
                                <h6 className="card-title text-center p-2" style={{background:'#f5faf6',}} >SHIPPING ONLY</h6>
                                <h5 className='text-start mt-4'>World-Famous Banana Pudding Variety Multipack</h5>
                                <p className='text-start'>This online exclusive variety pack combines three of our most popular world-famous</p>
                                <p className='text-start'>Starting at $64</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
export default Component3;