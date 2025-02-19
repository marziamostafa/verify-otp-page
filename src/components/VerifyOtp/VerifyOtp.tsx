"use client"
import React, { useState } from 'react'

export default function VerifyOtp() {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(''))

    const handleChangeBox = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (isNaN(Number(value))) return false;
        const newOtp = [...otp.map((data, indx) => {
            return indx === index ? value : data
        })];
        setOtp(newOtp);
        if (value && e.target.nextSibling) {
            (e.target.nextSibling as HTMLElement).focus()
        }

        // console.log(newOtp)
    }

    // reset opt
    const handleResendOtp = () => {

    }

    const handleVerify = () => {
        const joinedOtp = otp.join('');
        const convertedOTP = parseInt(joinedOtp);
        console.log(convertedOTP)

    }

    return (
        <div className='place-items-center mt-8'>
            <div className='flex gap-3'>
                {
                    otp.map((data, i) => (
                        <input key={i} type='text'
                            maxLength={1}
                            className={`h-[68px] w-[68px] bg-black border text-3xl text-white rounded-lg 
          text-center ${data ? 'border-lime-500' : 'border-stone-600'}`}
                            onChange={(e) => handleChangeBox(e, i)}
                            value={data}
                        ></input>
                    ))
                }
            </div>
            <p className='mt-8 font-medium text-base'>Didn't get OTP? <span onClick={handleResendOtp} className="text-lime-500 hover:underline cursor-pointer">
                Resend Code
            </span></p>

            <center className='mt-6'> <button onClick={handleVerify} className='font-medium text-lg btn w-[136px] h-[48px] rounded-md bg-lime-500'
                type="submit"
            >Verify</button></center>

        </div>
    )
}
