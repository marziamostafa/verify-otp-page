import VerifyOtp from '@/components/VerifyOtp/VerifyOtp'
import React from 'react'

export default function index() {
  return (
    <div className=" flex flex-col  items-center gap-12 place-content-center" style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh"
    }}>

      <div className=" bg-black w-[478px] h-[362px] rounded-2xl text-white ">
        <div className=' text-center'>

          <h2 className="font-semibold text-2xl text-center text-white mt-8 ">Verify Phone</h2>
          <p className='text-base text-center my-2'>Code Has Been Sent to +0163547899 </p>
          <VerifyOtp />
        </div>

      </div>
    </div>
  )
}
