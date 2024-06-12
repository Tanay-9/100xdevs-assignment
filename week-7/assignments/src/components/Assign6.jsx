import { useState } from "react"

const Assign6 = () => {
    const [showOTP, setShowOTP] = useState(false);
  return (
 <>
        <div className="flex justify-center items-center h-screen bg-black">
    {showOTP? <OTP/> : <NumberInput setShowOTP = {setShowOTP}/>}
    </div>
 </>
  )
}

export default Assign6


const OTP = () => {
    return (
        <>
    <p className="text-white">this is otp one</p>
    </>
    )
}

const NumberInput = ({setShowOTP}) => {
    return (
        <>
            <div className=" border-2 border-dashed border-zinc-400 rounded-3xl w-3/12">
                <div className="flex flex-col items-center justify-between gap-8 py-10 px-6">
                <h1 className="text-4xl text-white">Login via OTP</h1>
                <input type="text" className= "py-2 bg-transparent rounded w-3/4 border border-dashed text-center text-white placeholder:text-center" placeholder="Enter the phone number" minLength={10}/>
                <button className="bg-transparent text-white border border-dotted px-2 py-2 border-zinc-400 rounded-3xl" onClick={()=>setShowOTP(true)}>Send OTP</button>
                </div>
            </div>
        </>
    )
}