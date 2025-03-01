import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdoptionFile = () => {
    return(
        <>
        
        <div className="h-screen px-24">

        <div className="pt-16">
                <Link to='/adoptpage'><FaArrowLeft/></Link>
            </div>

            <div className="flex justify-center items-center flex-col gap-5">
                <h1 className="font-protest text-[#DC8857] text-5xl">Apply to Adopt</h1>
                <div className="text-base font-sans">
                    <p>Please be reminded that if you don't fill up all field with a <span className="font-sans text-red-500">*</span> mark, you will not able to submit the application.</p>
                </div>

                <form className="flex flex-col justify-start w-full gap-5">
                    <div className="flex gap-5">
                    <div className="flex flex-col w-1/2">
                     <p className="text-[#DC8857] font-semibold">Firstname: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="Juan" className="w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col w-1/2">
                     <p className="text-[#DC8857] font-semibold">Lastname: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="Dela Cruz" className="w-full border rounded p-1.5"/>
                  </div>
                    </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Email address: <span className="text-xs text-red-500">*</span></p>
                        <input required type="email" placeholder="example@gmail.com" className="w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Address: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="House no., Street, Town, City, Province" className="w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Contact no.: <span className="text-xs text-red-500">*</span></p>
                        <input required type="tel" maxLength='11' placeholder="09*********" className="w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Other details to support application: <span className="text-xs text-red-500">*</span></p>
                        <textarea required type="text" placeholder="experience, reason of adopting, etc." className="w-full border rounded p-1.5"/>
                  </div>

                  <div className="flex justify-end gap-5">
                  <Link to="/adoptpage"><button className="border hover:border-[#DC8857] border-[#DC8857]/60 rounded px-4 p-2 text-[#DC8857]">Cancel</button></Link>
                    <button className="bg-[#DC8857] rounded px-4 p-2 text-white hover:bg-[#DC8857]/90">Submit</button>
                  </div>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default AdoptionFile