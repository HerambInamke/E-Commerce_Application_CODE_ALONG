import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/nav'
import { useNavigate } from 'react-router-dom'

function createAddress() {
    const navigate=useNavigate()
    const [country,setCountry]=useState("")
    const [city,setCity]=useState("")
    const [address1,setAddress1]=useState("")
    const [address2,setAddress2]=useState("")
    const [addresstype,setAddresstype]=useState("")
    const [zipcode,setZipcode]=useState("")

    const handleSubmit= async (e)=>{
        e.preventDefault()

        const addressData={
            county,
            city,
            address1,
            address2,
            zipcode,
            addresstype,
            email: "a@gmail.com"
        }

        try{
            const res=await axios.post(
                "http://localhost:8000/api/v2/user/add-address",
                addressData,
                {
                    headers:{"Content-type"     : "application/json"}
                }
            )
    
            if (!res.status===201){
                alert("Address added successfully")
                navigate("/profile")
            }
        }catch(err){
            console.error(err.message)
            alert("Failed to add adress")
        }
    }

    

  return (
    <>
            <Navbar />
            <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
                <h5 className="text-[24px] font-semibold text-center">Add Address</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="pb-1 block">Country</label>
                        <input
                            type="text"
                            value={country}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Enter country"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">City</label>
                        <input
                            type="text"
                            value={city}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address 1</label>
                        <input
                            type="text"
                            value={address1}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Enter address 1"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address 2</label>
                        <input
                            type="text"
                            value={address2}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Enter address 2"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Zip Code</label>
                        <input
                            type="number"
                            value={zipcode}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setZipcode(e.target.value)}
                            placeholder="Enter zip code"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-1 block">Address Type</label>
                        <input
                            type="text"
                            value={addresstype}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setAddresstype(e.target.value)}
                            placeholder="Enter address type"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
                    >
                        Add Address
                    </button>
                </form>
            </div>
        </>
  )
}

export default createAddress
