import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='Award'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Option</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct Mutual funds</li>
                                <li>Bond and Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"90%"}} alt='Logo' />
                </div>
            </div>
        </div>
    );
}

export default Awards;