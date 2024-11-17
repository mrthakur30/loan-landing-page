import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { API, DASHBOARD_URL } from "../api";
const Form = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        phoneNumber: "",
        email: "",
        fname: "",
        lname: "",
        phoneVerified: false,
        city: "",
        pincode: "",
    });

    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSendOtp = async () => {
        if (!phone) {
            setError("Please provide a phone number.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API}/phone/request-otp/nc`, {
                phone,
                countryCode: "+91",
            });
            if (response.status === 200) {
                setIsOtpSent(true);
                setError("");
                toast.success("OTP sent successfully!");
            }
        } catch (error) {
            toast.error("Failed to send OTP. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            setError("Please enter the OTP.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API}/phone/verify-otp`, {
                phone,
                otp,
            });
            if (response.status === 200) {
                await checkCustomerStatus();
                setError("");
                toast.success("OTP verified!");
            } else {
                setError("Invalid OTP.");
            }
        } catch (error) {
            toast.error("Failed to verify OTP.");
        } finally {
            setLoading(false);
        }
    };

    const checkCustomerStatus = async () => {
        try {
            const response = await axios.get(`${API}/custTable/check`, {
                params: { phone, countryCode: "+91" },
            });
            if (response.status === 200) {
                setIsNewUser(true);
                toast("New user detected. Please register.");
            }
        } catch (error) {
            await loginExistingCustomer();
            toast("User Already Exists");
        }
    };

    const loginExistingCustomer = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API}/custTable/by/phone`, {
                params: { phone, countryCode: "+91" },
            });

            const data = response.data.data;

            window.location.href = `${DASHBOARD_URL}/redirect?To=${'finance-your-project'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error("Failed to log in.");
        } finally {
            setLoading(false);
        }
    };

    const registerNewCustomer = async () => {
        if (!termsAccepted) {
            setError("You must accept the Terms and Conditions.");
            return;
        }
        setLoading(true);
        const apiData = {
            Name: `${user.fname} ${user.lname}`,
            Phone: phone,
            PCode: "+91",
            City: user.city,
            ZipCode: user.pincode,
            Email: user.email,
        };
        try {
            const response = await axios.post(`${API}/custTable/signup`, apiData);

            const data = response.data.data;

            if (response.status === 200) {
                const userToSend = {
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email,
                    phoneVerified: user.phoneVerified,
                    phoneNumber: user.phoneNumber,
                    pCode: "+91",
                    city: user.city,
                    pincode: user.pincode,
                };

                await fetch("https://www.designelementary.com/api/user/india/sign-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userToSend),
                }).then(() => {
                    window.location.href = `${DASHBOARD_URL}/redirect?To=${'design-ai'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;
                    toast.success("Registered successfully!");
                }).catch((error) => error.response.json());
            }
        } catch (error) {
            toast.error("Registration failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <Toaster />
            <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative">
                <h1 className="text-center text-4xl font-bold text-green-600 mb-8">
                    Design Now
                </h1>
                {!isOtpSent ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input input-bordered w-full mb-4 p-4 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <button
                            onClick={handleSendOtp}
                            disabled={loading}
                            className={`btn w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300 ${loading ? "cursor-not-allowed opacity-70" : ""
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                "Send OTP"
                            )}
                        </button>
                    </div>
                ) : isNewUser ? (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Register
                        </h2>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={user.fname}
                            onChange={(e) => handleInputChange("fname", e.target.value)}
                            className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={user.lname}
                            onChange={(e) => handleInputChange("lname", e.target.value)}
                            className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={user.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            placeholder="Pincode"
                            value={user.pincode}
                            onChange={(e) => handleInputChange("pincode", e.target.value)}
                            className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(!termsAccepted)}
                                className="mr-2"
                            />
                        </div>
                        <label htmlFor="terms" className="text-slate-600">
                            I accept the <a href="/terms" className="text-blue-500">Terms and Conditions</a>
                        </label>
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <button
                            onClick={registerNewCustomer}
                            disabled={loading}
                            className={`btn w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300 ${loading ? "cursor-not-allowed opacity-70" : ""
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        ></path>
                                    </svg>
                                    Registering...
                                </span>
                            ) : (
                                "Register"
                            )}
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="input input-bordered w-full mb-4 p-4 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {error && <p className="text-red-500 mb-2">{error}</p>}
                        <button
                            disabled={loading}
                            onClick={handleVerifyOtp}
                            className={`btn w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300 ${loading ? "cursor-not-allowed opacity-70" : ""
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        ></path>
                                    </svg>
                                    Verifying...
                                </span>
                            ) : (
                                "Verify OTP"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Form;
