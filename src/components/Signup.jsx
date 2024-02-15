import React, { useEffect, useState } from 'react'
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAuth } from '../context/authContext'
import { useNavigate } from "react-router-dom"
import { sendOtp } from '../services/operations/authAPI'

const Signup = () => {

    const auth = useAuth();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    // Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password Do Not Match")
            return;
        }

        // Setting signup data to state
        // To be used after otp verification
        auth.setSignupData(formData);

        // Send OTP to user for verification
        sendOtp(formData.email, navigate, auth.setLoading);

        // Reset
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }



    return (
        <div>
            <form onSubmit={handleOnSubmit} className="flex w-[90%] mx-auto flex-col gap-y-4">
                <div>
                    <h1 className="bg-gradient-to-l bg-fuchsia-800 bg-clip-text text-4xl font-bold text-transparent">
                        Create new account
                    </h1>
                    <h2 className="text-gray-600">
                        Already have an account? <Link to='/'><span className="underline text-violet-600">Login</span></Link>
                    </h2>
                </div>
                <div className="flex gap-x-4 w-full">
                    <label className='w-full'>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-left text-lg">
                            First Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={handleOnChange}
                            placeholder="Enter first name"
                            className="form-style w-full"
                        />
                    </label>
                    <label className='w-full'>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-left text-lg">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleOnChange}
                            placeholder="Enter last name"
                            className="form-style w-full"
                        />
                    </label>
                </div>
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-left text-lg">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        className="form-style w-full"
                    />
                </label>
                <div className="flex gap-x-4">
                    <label className="relative w-full">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-left text-lg">
                            Create Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            className="form-style w-full !pr-10"
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className="relative w-full">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-left text-lg">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder="Confirm Password"
                            className="form-style !pr-10 w-full"
                        />
                        <span
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-6 rounded-[8px] bg-gradient-to-l from-fuchsia-600 to-indigo-600 text-white py-[8px] px-[12px] font-medium"
                >
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default Signup