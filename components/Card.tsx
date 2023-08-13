import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-row justify-between ml-[112px] items-center">
      <div className="self-end flex flex-col mb-20 gap-20 w-1/2">
        <div className="flex flex-col gap-6">
          <div className="text-5xl font-bold tracking-[-0.52] leading-[60px] text-white">
            Your Supercharged Design Workflow.
          </div>
          <div className="text-lg tracking-[-0.1] leading-[26px] text-[#b1ccfb] mb-2">
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </div>
          <button className="self-start flex flex-col" id="Button2">
            <button
              className="shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.04)] overflow-hidden bg-[#437ef7] flex flex-col justify-center h-12 shrink-0 px-4 rounded"
              id="Button1"
            >
              <div
                className="whitespace-nowrap text-sm font-semibold leading-[22px] text-white"
                id="Text1"
              >
                Get Started
              </div>
            </button>
          </button>
        </div>
        <div className="flex flex-col gap-5 h-16 shrink-0">
          <div className="text-sm font-medium tracking-[-0.1] leading-[20px] text-white">
            Who supports us
          </div>
          <div className="flex flex-row gap-8 items-center ml-2 mr-40">
            <img
              src="https://file.rendit.io/n/YVMWr4AbIDHWqFswiCH9.svg"
              className="w-24 shrink-0"
              id="Logo"
            />
            <img
              src="https://file.rendit.io/n/FpZjtfJEGS7WBuIXrmMD.svg"
              className="mr-3 w-20 shrink-0"
              id="Logo1"
            />
            <img
              src="https://file.rendit.io/n/MTE70wfwou9ItencHWCf.svg"
              className="mr-3 w-20 shrink-0"
              id="Logo2"
            />
            <img
              src="https://file.rendit.io/n/pb0Y3DPb4MV40pzdJuxQ.svg"
              className="w-20 shrink-0"
              id="Logo3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-1/2 items-center">
        <div className="self-end flex flex-col mb-16 items-center">
          <div
            className="bg-white self-stretch h-[112px] shrink-0 rounded-[50%]"
            id="Elem7"
          />
          <img
            src="https://file.rendit.io/n/Qu12Ncg7AWh4OhuPxxgq.svg"
            className=""
          />
          <img
            src="https://file.rendit.io/n/Qu12Ncg7AWh4OhuPxxgq.svg"
            className=""
          />
          <div
            className="border-solid border-white self-stretch flex flex-col justify-center h-[112px] shrink-0 items-center border-2 rounded-[50%]"
            id="Ellipse"
          >
            <div
              className="bg-[#b1ccfb] w-12 h-12 shrink-0 rounded-[50%]"
              id="Ellipse1"
            />
          </div>
        </div>
        <div
          className="bg-[#3971e7] flex flex-row pt-8 w-[488px] items-start"
          id="Background"
        >
          <div className="flex flex-col mb-16 w-1/2 items-center">
            <img
              src="https://file.rendit.io/n/WH9F0OTBC9Bp7pV8coti.svg"
              className=""
              id="Elem"
            />
            <img
              src="https://file.rendit.io/n/gmcX4BnLqXmCU4kAfL8D.png"
              className="rounded-tl-[112px] rounded-br-[112px] rounded-bl-[112px]"
            />
            <img
              src="https://file.rendit.io/n/rQdOgwBtz1MM077yY9Gr.svg"
              className=""
              id="Elem8"
            />
            <img
              src="https://file.rendit.io/n/4b8hrSuAs2v1a3Rh6qy9.svg"
              className=""
              id="Elem4"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://file.rendit.io/n/EcZK47CXappYuUKnjah2.svg"
              className=""
              id="Elem1"
            />
            <img
              src="https://file.rendit.io/n/Pa5P9uk1CptLvmcdL84k.svg"
              className=""
              id="Elem2"
            />
            <img
              src="https://file.rendit.io/n/odWSLU5oByRGt6U6w6IW.svg"
              className=""
              id="Elem3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card