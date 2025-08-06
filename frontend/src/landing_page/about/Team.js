import React from 'react';
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h3 className='text-center'>People</h3>
            </div>

            <div className='row p-5'>
                <div className='col-1'></div>
               <div className='col-5 text-muted'>
                    <img src='media/AshishGupta.jpg' className="d-block mx-auto" style={{borderRadius:"100%", width:"70%"}}  alt='Nitin'/>
                    <h5 className='mt-4 text-center'>Ashish Kumar Gupta</h5>
                    <h6 className='text-center'>Founder</h6>
               </div>
               <div className='col-5 text-muted'>
                    <p style={{fontSize:"15px"}}>
                         Ashish bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/><br/>

                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>

                        Playing basketball is his zen.<br/><br/>

                        Connect on <a href='*' style={{textDecoration:"none"}} >Homepage</a> / <a href='*' style={{textDecoration:"none"}} >TradingQnA</a> / <a href='*' style={{textDecoration:"none"}} >Twitter</a>
                    </p>
               </div>
               <div className='col-1'></div>
            </div>
        </div> 
    );
}

export default Team;