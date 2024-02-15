import React, { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { login } from "../services/operations/authAPI"

const Login = () => {

    const navigate = useNavigate();
    const { setLoading, setToken, setUser } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        login(email, password, navigate, setLoading, setToken, setUser);
    }


    return (
        <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-[80%] mx-auto flex-col gap-y-4"
        >
            <div>
                <h1 className="bg-gradient-to-l bg-fuchsia-800 bg-clip-text text-4xl font-bold text-transparent">
                    Login
                </h1>
                <h2 className="text-gray-600">
                    Doesn't have an account yet? <Link to='/signup'><span className="underline text-violet-600">Sign up</span></Link>
                </h2>
            </div>
            <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-lg text-left">
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
            <label className="relative">
                <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-gray-800 text-lg text-left flex justify-between">
                    <div>Password <sup className="text-pink-200">*</sup></div>

                    <Link to="/forgot-password">
                        <p className="mt-1 ml-auto max-w-max text-base text-violet-600 underline">
                            Forgot Password?
                        </p>
                    </Link>
                </div>
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
                    className="absolute right-3 top-[43px] z-[10] cursor-pointer"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
            </label>
            <button
                type="submit"
                className="mt-6 rounded-[8px] bg-gradient-to-l from-fuchsia-600 to-indigo-600 text-white py-[8px] px-[12px] font-medium"
            >
                Sign In
            </button>
        </form>
    )
}

export default Login