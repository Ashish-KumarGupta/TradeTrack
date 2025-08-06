import React from "react";
function Hero() {
  return (
    <div className="container">
      <h3 className="mb-2 mt-5 text-center">Charges</h3>
      <p className="text-muted text-center mb-5">List of all charges and taxes</p>

      <div className="row mt-5">

        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" style={{ width: "50%" }} alt="" />
          <h3 className="mt-3 fs-3">Free equity delivery</h3>
          <p className="text-muted mt-2">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className="col-4 p-4">
          <img src="media/intradayTrades.svg" style={{ width: "50%" }} alt="" />
          <h3 className="mt-3 fs-3">Intraday and F&O trades</h3>
          <p className="text-muted mt-2">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className="col-4 p-4">
          <img src="media/pricingEquity.svg" style={{ width: "50%" }} alt="" />
          <h3 className="mt-3 fs-3">Free direct MF</h3>
          <p className="text-muted mt-2">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>


      </div>
    </div>
  );
}

export default Hero;
