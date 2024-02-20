import React from "react";

const Products = () => {
  return (
    <div className="mt-[10%] items-center text-center text-6xl text-white">
      <div id="overview" className="mb-20 h-[300px] bg-purple-400">
        Overview
      </div>
      <div id="product-features" className="mb-20 h-[300px] bg-purple-500">
        Features
      </div>
      <div id="solutions" className="mb-20 h-[300px] bg-purple-600">
        Solutions
      </div>
      <div id="tutorials" className="mb-20 h-[300px] bg-purple-700">
        Tutorials
      </div>
      <div id="pricing" className="mb-20 h-[300px] bg-purple-800">
        Pricing
      </div>
      <div id="releases" className="mb-20 h-[300px] bg-purple-900">
        Releases
      </div>
    </div>
  );
};

export default Products;
