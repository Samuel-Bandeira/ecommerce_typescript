import React from "react";

const Subtotal = () => {
  return (
    <div className="flex flex-col bg-gray-200 px-10 py-5">
      <p>Subtotal (0 items): $1,206.96</p>
      <div className="flex">
        <input type="checkbox" className="border border-black" />
        <p>This order contains a gift</p>
      </div>
      <button className="border border-black text-black bg-orange-300 p-2">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
