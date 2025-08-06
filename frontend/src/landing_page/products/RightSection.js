import React from "react";
function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h3 className="mt-5">{productName}</h3>
          <p className="text-muted">{productDescription}</p>

          <div>
            <a href={learnMore}>Learn More →</a>
          </div>
        </div>
        <div className="col-5 p-1">
          <img src={imageURL} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
