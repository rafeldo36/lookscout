import React from 'react'

const Footer = () => {
  return (
    <div
    className="bg-[#151b28] flex flex-col justify-center gap-12 h-[404px] shrink-0 px-[112px]"
    id="Footer"
  >
    <div className="flex flex-row gap-40 items-center">
      <div className="self-start flex flex-col mt-1 gap-5 items-start">
        <img
          src='company-logo.svg'
          className="ml-1"
          id="Lookscout2"
        />
        <div className=" tracking-[-0.1] leading-[24px] text-[#a5acba] self-stretch">
          Generate outside the box thinking with the possibility to targtet the
          low.
        </div>
      </div>
      <div className="flex flex-col gap-6 w-24 shrink-0 items-center">
        <div
          className=" font-semibold tracking-[-0.1] leading-[24px] text-[#f9f9f9] self-stretch mr-2"
          id="Features1"
        >
          Resources
        </div>
        <div className="flex flex-col justify-between gap-3 w-24">
        <a href='#'>
          <div
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] mr-1"
            id="Link1"
          >
            Community
          </div>
          </a>
          <a href='#'>
          <div
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] self-start w-3/5"
            id="Link2"
          >
            Events
          </div></a>
          <a href='#'>
          <div
            className="whitespace-nowrap font-medium tracking-[-0.1] leading-[24px] text-[#a5acba]"
            id="Link3"
          >
            Help Center
          </div></a>
          <a href='#'>
          <div
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] mr-6"
            id="Link4"
          >
            Partners
          </div></a>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-24 shrink-0 items-center">
        <div
          className=" font-semibold tracking-[-0.1] leading-[24px] text-[#f9f9f9] self-stretch mr-5"
          id="Features2"
        >
          Products
        </div>
        <div className="flex flex-col justify-between gap-3 w-24">
          <a href='#'
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba]"
            id="Link5"
          >
            Integrations
          </a>
          <a href='#'
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] mr-5"
            id="Link6"
          >
            Solutions
            </a>
          <a href='#'
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] mr-6"
            id="Link7"
          >
            Features
            </a>
          <a href='#'
            className=" font-medium tracking-[-0.1] leading-[24px] text-[#a5acba] mr-3"
            id="Link8"
          >
            Enterprise
            </a>
        </div>
      </div>
      <div className="self-start flex flex-col gap-6 items-start">
        <div
          className="whitespace-nowrap font-semibold tracking-[-0.1] leading-[24px] text-[#f9f9f9] w-3/5"
          id="Features3"
        >
          Get Email Notifications
        </div>
        <button className="self-stretch flex flex-col gap-4" id="Button25">
          <div className=" tracking-[-0.1] leading-[24px] text-[#a5acba]">
            Generate outside the box thinking with the possibility to targtet
            the low
          </div>
          <div className="flex flex-row items-center">
            <button
              className="border-solid border-[#2e3545] overflow-hidden bg-[#2c3444] flex flex-col justify-center w-56 h-12 px-4 border rounded-tl rounded-bl"
              id="Button23"
            >
              <input
                className="text-sm bg-[#2e3545] border-none outline-none tracking-[-0.1] leading-[22px] text-[#a5acba]"
                id="Text21"
              placeholder='Enter email....'
             />
            </button>
            <button
              className="overflow-hidden bg-[#437ef7] flex flex-col justify-center w-20 shrink-0 h-12 items-center rounded-tr rounded-br"
              id="Button24"
            >
              <div
                className="text-sm font-semibold leading-[22px] text-white w-3/5"
                id="Text22"
              >
                Submit
              </div>
            </button>
          </div>
        </button>
      </div>
    </div>
    <div
      className="border-solid border-[#2e3545] flex flex-row justify-between h-12 shrink-0 items-end border-t border-b-0 border-x-0"
      id="TextInput9"
    >
      <div className="text-center whitespace-nowrap tracking-[-0.1] leading-[24px] text-[#a5acba] w-[298px] shrink-0">
        © 2023 Lookscout. All Rights Reserved.
      </div>
      
      <div className="flex flex-row gap-6 items-center">
      <a href='https://www.facebook.com/' target='_blank'>
      <img
            src="facebook.svg"
            className=" top-[-3px]"
          />
        </a>
        <a href='https://www.google.com/' target='_blank'>
        <div className="relative flex flex-col mr-px w-6 shrink-0 items-center pb-4 px-px">
          <img
            src="google.svg"
            className="w-12 absolute top-[-3px]"
          />
        </div></a>
        <a href='https://www.apple.com/' target='_blank'>
        <img
            src="appl.svg"
            className=" top-[-3px]"
          />
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
        <div
        >
          <img
            src="instagram.svg"
            className="  top-[-3px]"
          />
        </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer