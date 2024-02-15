import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from '../../services/apis'
import { useAuth } from "../../context/authContext";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export async function sendOtp(email, navigate, setLoading) {
  const toastId = toast.loading('Loading...')
  setLoading(true)
  try {
    const response = await apiConnector('POST', SENDOTP_API, {
      email
    })
    console.log("SENDOTP API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    toast.success('OTP Sent Successfully')
    navigate('/verify-email')
  } catch (error) {
    console.log("SENDOTP API ERROR............", error)
    toast.error("Could Not Send OTP")
  }
  setLoading(false)
  toast.dismiss(toastId)
}

export async function signUp(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate,
  setLoading
) {

  const toastId = toast.loading("Loading...")
  setLoading(true);
  try {
    const response = await apiConnector("POST", SIGNUP_API, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
    })

    console.log("SIGNUP API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Signup Successful")
    navigate("/")
  } catch (error) {
    console.log("SIGNUP API ERROR............", error)
    toast.error("Signup Failed")
    navigate("/signup")
  }
  setLoading(false)
  toast.dismiss(toastId)
}

export async function login(email, password, navigate, setLoading, setToken, setUser) {

  const toastId = toast.loading("Loading...")
  setLoading(true)
  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    })

    console.log("LOGIN API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Login Successful")
    setToken(response.data.token)
    const userImage = response.data?.user?.image
      ? response.data.user.image
      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
    setUser({ ...response.data.user, image: userImage })
    localStorage.setItem("token", JSON.stringify(response.data.token))
    localStorage.setItem("user", JSON.stringify(response.data.user))
    navigate("/dashboard/my-images")
  } catch (error) {
    console.log("LOGIN API ERROR............", error);
    toast.error(error.response.data.message);
  }
  setLoading(false)
  toast.dismiss(toastId)
}

export async function getPasswordResetToken(email, setEmailSent, setLoading) {

  const toastId = toast.loading("Loading...")
  setLoading(true);
  try {
    const response = await apiConnector('POST', RESETPASSTOKEN_API, { email })

    console.log('RESET PASSWORD TOKEN RESPONSE...', response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success('Reset Email Sent');
    setEmailSent(true);
  } catch (error) {
    console.log('RESET PASSWORD TOKEN Error.')
    toast.error("Failed To Send Reset Email")
  }
  toast.dismiss(toastId)
  setLoading(false);
}

export async function resetPassword(password, confirmPassword, token, navigate, setLoading) {
  const toastId = toast.loading("Loading...")
  setLoading(true);
  try {
    const response = await apiConnector('POST', RESETPASSWORD_API, { password, confirmPassword, token });

    console.log('RESET PASSWORD RESPONSE...', response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success('Password Reset Successfully');
    navigate("/login")
  } catch (error) {
    console.log('RESET PASSWORD TOKEN Error', error);
    toast.error('Failed to reset password');
  }
  toast.dismiss(toastId)
  setLoading(false);
}

export function logout(navigate, setToken, setUser) {
  setToken(null)
  setUser(null)
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  toast.success("Logged Out")
  navigate("/")
}