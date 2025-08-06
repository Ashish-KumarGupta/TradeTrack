import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <a
            href="https://www.zerodhafundhouse.com/"
            alt="zerodha"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/zerodhaFundhouse.png"
              style={{ width: "50%" }}
              alt="*"
            />
            <p className="text-muted mt-2">Thenatic investment platform</p>
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://sensibull.com/"
            alt="*"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/sensibullLogo.svg"
              style={{ width: "50%" }}
              alt="*"
            />
            <p className="text-muted mt-2">Thematic investment platform</p>
          </a>
        </div>
        <div className="col-4">
          <a
            href="https://www.tijorifinance.com/ideas-dashboard/"
            alt="*"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://zerodha.com/static/images/partners/tijori.svg"
              style={{ width: "30%" }}
              alt="*"
            />
            <p className="text-muted mt-2">Thenatic investment platform</p>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <a
            href="https://www.streak.tech/home"
            alt="*"
            style={{ textDecoration: "none" }}
          >
            <img src="media/streakLogo.png" style={{ width: "50%" }} alt="" />
            <p className="text-muted mt-2">Thenatic investment platform</p>
          </a>
        </div>

        <div className="col-4">
          <a
            href="https://smallcase.zerodha.com/"
            alt="*"
            style={{ textDecoration: "none" }}
          >
            <img
              src="media/smallcaseLogo.png"
              style={{ width: "50%" }}
              alt="*"
            />
            <p className="text-muted mt-2">Thematic investment platform</p>
          </a>
        </div>

        <div className="col-4">
          <a
            href="https://joinditto.in/"
            alt="*"
            style={{ textDecoration: "none" }}
          >
            <img src="media/dittoLogo.png" style={{ width: "30%" }} alt="" />
            <p className="text-muted mt-2">Thenatic investment platform</p>
          </a>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
