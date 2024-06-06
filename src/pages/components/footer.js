import REACT from 'react';
const Footer =()=>{
    const data1=[
        {id:"1",li:"CAREERS"},
        {id:"2",li:"PRESS"},
        {id:"3",li:"GIFT CARDS"},
        {id:"4",li:"SUBSCRIPTIONS"},
        {id:"5",li:"GIVING BACK"},
      ]
      const data2=[
        {id:"1",li:"HELP CENTER"},
        {id:"2",li:"GIVING BACK"},
        {id:"3",li:"PROMOTION TERMS"},
        {id:"4",li:"WHOLESALE"},
        {id:"4",li:"GIFT CARDS"},
        {id:"4",li:"REFUNDS&RETURNS"},
      ]
      const data3=[
        {id:"1",li:"DO NOT SELL MY INFORMATION"},
        {id:"2",li:"PRIVACY POLICY"},
        {id:"3",li:"TERMS OF SERVICE"},
        {id:"4",li:"ACCESSIBILITY STATEMENT"},
      ]

    return(
        <>         
     <div className='container-fluid h-100 w-100 p-5 footer align-items-center  justify-content-center m-auto'style={{background:'#bae8d4'}}>
       <div className='container h-50  d-flex justfy-content-between row row-cols-1 row-cols-md-3 row-cols-lg-3 '>
            <div className='container  text-center'>
                <div className="  d-block ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuyT4MYJrdI36GgnHT5MJJVwKamOEwy2AGQ&s" alt="Logo" width='100px' height='auto' />
                    </div>
            
                    <div className="container  col m-auto ">
                            {data1.map((data)=>(
                            <ul className="list-unstyled">
                            <li key={data.id}>{data.li}</li>
                            </ul>       
                                ))}
                    </div>
                </div>
                <div className='container col m-auto  text-center'>
                
                    {data2.map((data)=>(
                            <ul className="list-unstyled">
                            <li key={data.id}>{data.li}</li>
                            </ul>        
                        ))}
                </div>
                <div className='container col m-auto  text-center'>
                <div>
                                <h4 style={{ color: "#013609" }}>Have a Question?</h4>
                                <p>We're always here to lend a helping hand.</p>
                                <p>Consumer Care Team hours are Monday-Friday, 9am - 5pm EST</p>
                        </div>
                        <div>
                            <h4 className='text-center' style={{ color: "#013609" }}>CONTACT US</h4>
                            <div className= 'container' style={{ color: "#013609" }}>
                                <i className="fab fa-facebook-square m-2 fs-3" ></i>
                                <i className="fab fa-instagram-square m-2 fs-3"></i>
                                <i className="fab fa-twitter-square m-2 fs-3"></i>
                                <i className="fab fa-pinterest m-2 fs-3"></i>
                        </div>
                        </div> 
                </div>
       </div>
       <div className='container h-50  d-flex justfy-content-between mt-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 text-center'>
            {data3.map((data,index)=>(
            <div className='container my-2' key={index}><h6>D{data.li}</h6> </div> ))}
                <div className='container d-block mt-4 ' style={{ color: "#013609" }}>
                    <i className="Icon fab fa-cc-visa fs-1 me-2"></i>
                    <i className="Icon fab fa-cc-mastercard fs-1 me-2"></i>
                    <i className='Icon fab fa-cc-amex fs-1 me-2'></i>
                    <i className='Icon fab fa-cc-discover fs-1 '></i>
            </div>
          </div>
       </div> 
        </>
    )
}
export default Footer;

       