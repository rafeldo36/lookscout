import React from 'react'

const Testimonials = () => {
  return (
    <div
    className="bg-white flex flex-col justify-center px-[70px] py-16"
    id="Testimonial"
  >
    <div
      className="bg-[#f8f9fb] flex flex-col gap-8 h-[316px] shrink-0 items-center pt-10 pb-8 px-48 rounded-lg"
      id="HorizontalContainer4"
    >
      <img
        src="https://file.rendit.io/n/IUcyzaJe0QNYEpW7d4fK.svg"
        className="mb-1"
        id="Lookscout1"
      />
      <div className="text-center text-3xl  font-medium tracking-[-0.28] leading-[38px] text-[#272d37] self-stretch">
        Thank you for making it painless, pleasant and most of all hassle free!
        I love LookScout. I can't say enough about LookScout. Great job, I will
        definitely be ordering again!
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://file.rendit.io/n/Q8vlu032nNXOD2edtdfD.png"
          className="w-10 shrink-0 rounded-[50px]"
          id="Avatar"
        />
        <div className="flex flex-col w-24 shrink-0">
          <div
            className="whitespace-nowrap text-sm  font-medium tracking-[-0.1] leading-[22px] text-[#272d37] mr-5"
            id="DaveJones"
          >
            Lisa Smith
          </div>
          <div
            className="whitespace-nowrap text-sm  font-medium tracking-[-0.1] leading-[20px] text-[#5f6d7e]"
            id="CEO"
          >
            CEO Company
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials