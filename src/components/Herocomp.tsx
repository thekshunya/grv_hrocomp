import React from 'react';
import Buttonji from './Buttonji';
import Image from 'next/image';
const Herocomp = () => {
  return (
    <>
      <div className="w-3/5  mx-auto  flex mt-28 justify-center items-center flex-col">
        <div className="text-5xl font-bold mb-2 tracking-tighter trackin ">
          Business. Simplified.
        </div>
        <p className="text-center font-normal px-12 mb-8 text-sm">
          With Deskera ERP, automate and centralise business processes, gain
          real-time insights and increase business control, increase data
          accuracy, reduce costs, fulfill orders, and much more.
        </p>
        <Buttonji />
      </div>
      <div className="flex mt-10 justify-center">
        <Image
          src="/ig-erp-dashboard.webp"
          width={1000}
          height={1000}
          alt="oy"
        />
      </div>
    </>
  );
};

export default Herocomp;
