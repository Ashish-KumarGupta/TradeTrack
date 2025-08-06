import React from 'react';
function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col p-1'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-5'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-5'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h2 className='fs-5'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-5'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col p-10'>
                    <img src='media/ecoSystem.png' style={{width:"90%"}} alt='ecoSystem'/>
                <div className='text-center mt-4'>
                <a href='lkjgt' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                <a href='lkjgt' style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            
            </div>
            </div>
            </div>
        </div>
    );
}

export default Stats;