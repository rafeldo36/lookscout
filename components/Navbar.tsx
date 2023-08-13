"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-solid border-[#648ef7] flex flex-col sm:flex-row justify-between h-auto sm:h-20 shrink-0 items-center px-4 sm:px-10 border-t-0 border-b border-x-0">
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2 items-center">
        <img
          src="company-logo.svg"
          className="mb-2 sm:mb-0 mr-4 sm:mr-5 w-120 sm:w-100"
          id="Lookscout"
          alt="Lookscout Logo"
        />
        <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} sm:gap-4 sm:items-center`}>
          <button className="text-sm font-semibold leading-[22px] text-white w-20 sm:w-30 mb-2 sm:mb-0" id="Text2">
            Home
          </button>
          <button className="text-sm font-semibold leading-[22px] text-white w-30 mb-2 sm:mb-0" id="Text3">
            Our Products
          </button>
          <button className="text-sm font-semibold leading-[22px] text-white w-30 mb-2 sm:mb-0" id="ButtonText">
            Resources
          </button>
          
          <img
            src="https://file.rendit.io/n/3Nm0BVQiAI5Pq26dwoAX.svg"
            className="hidden sm:inline-block w-3 mr-2"
            id="Icon"
            alt="Resources Icon"
          />
          <button className="text-sm font-semibold leading-[22px] text-white w-20 sm:w-30 mb-2 sm:mb-0" id="Text4">
            Contacts
          </button>
        </div>
      </div>
      <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} sm:gap-6 sm:items-center mt-2 sm:mt-0`}>
        <div className="whitespace-nowrap text-sm font-semibold leading-[22px] text-white mb-2 sm:mb-0" id="Text5">
          Log in
        </div>
        <button className="shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.04)] overflow-hidden bg-[#437ef7] flex flex-col justify-center w-24 h-12 sm:w-20 items-center rounded">
          <div className="whitespace-nowrap text-sm font-semibold leading-[22px] text-white sm:w-3/5" id="Text6">
            Sign up
          </div>
        </button>
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img
            src={isOpen ? 'close.svg' : 'menu.svg'}
            className='w-[25px] h-[25px] object-contain'
            onClick={() => setIsOpen(!isOpen)}
          />
          </div>
    </div>
  );
};

export default Navbar;
