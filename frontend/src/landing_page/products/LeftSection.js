import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
    }) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5 p-3 p-5'>
                    <img src={imageURL} style={{width:"100%"}} alt=''/>
                </div>
                <div className='col p-5'>
                    <h3 className='mt-4'>{productName}</h3>
                    <p className='text-muted'>{productDescription}</p>

                    <div>
                    <a href={tryDemo}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"60px"}}>Learn More →</a>
                    </div>
                    
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/googlePlayBadge.svg' alt=''/></a>
                    <a href={appStore} style={{marginLeft:"20px"}}><img src='media/appstoreBadge.svg' alt='' /></a>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default LeftSection;