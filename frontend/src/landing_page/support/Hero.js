import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid'>
            <div className='row mt-3 mb-5' style={{backgroundColor:"#388cd1"}}>
            </div>
            <div className='row mt-5 mb-5' style={{backgroundColor:"#388cd1"}}>
                <div className='col-2'></div>
                <div className='col-4 p-2 mb-5'>
                    <h6 className=' mt-3 mb-5' style={{color:"white"}}>Support Portal</h6>
                    <h5 style={{color:"white"}}>Search for an answer or browser help topics to create a ticket</h5>
                    <input placeholder='Eg. how do i activate F&O, why is my order getting rejected' style={{padding:"10px 20px", fontSize:"12px", width:"100%", borderRadius:"10px", border:"none"}}></input> <br></br>
                    <a href='*' style={{color:"white", fontSize:"12px"}}>Track account opening</a>
                    <a href='*' style={{marginLeft:"15px", color:"white", fontSize:"12px"}}>Track segment activation</a>
                    <a href='*' style={{marginLeft:"15px", color:"white", fontSize:"12px"}}>Intraday margin</a>
                    <a href='*' style={{marginLeft:"15px", color:"white", fontSize:"12px"}}>Kite user manual</a>
                </div>
                <div className='col-4 p-2 mb-5'>
                    <h6 className=' mt-3 mb-5 text-center' style={{color:"white"}}>Track ticket</h6>
                    <h5 style={{color:"white"}}>Featured</h5>
                    <ol>
                        <li style={{color:"white"}}><a href='*' style={{marginLeft:"15px", color:"white", fontSize:"12px"}}>Current Takeovers and Delisting - January2024</a> </li>
                        <li style={{color:"white"}}><a href='*' style={{marginLeft:"15px", color:"white", fontSize:"12px"}}>Latest intraday laverages - MIS & CO</a></li>
                    </ol>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default Hero
